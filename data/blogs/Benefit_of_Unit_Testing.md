Benefit of Unit Testing
=======================

Unit testing is one of those things that everybody says you should do, but in my experience is never taken as seriously as it should be.  I think most developers view unit testing as a boring, check the box type of task.  I am just as guilty as the next developer of having this mentality, but the more experience I get the more I start to see the real benefit of unit testing.

I am not talking about the commonly touted benefit of unit testing: "companies will save money by finding defects earlier".  While that may be true, it is not a very tangible benefit for software engineers.  Of course, I don't have enough hands to count the number of times I found a bug later and thought:  "hrmm, a simple unit test for this case would have caught this", but that is hindsight and easier said than done.  I don't always think of all the cases and possible things that could happen, and most often these situations are some strange edge case that nobody would have thought of anyways when the code was first developed.

The real benefit of unit testing is that *you will become a better software engineer* by doing it.  Unit testing forces you to think about the code you wrote one more time, lets you see it in action, and gives you the opportunity to make it better.  In other words, unit testing enables you to refactor.  

We often take the first step, which is to write the test.  But if all you do is write the test to achieve the code coverage, you are missing out on the benefit.  Your eyes will glaze over as you copy and paste all the mocking for each test case, changing a line or two to handle the specific case you are testing.  Instead, as you are writing the test you should think about how the code could be better.

I experienced a great example of this recently when I was adding a second variation of an API to a service.  My first approach to solve this problem:  *inheritance*.

		AbstractBaseClass
			/  is-a	\
	ChildClass1		ChildClass2

There was no real issue with this approach.  Both child classes shared a ton of logic, so putting that in the base class would allow me to reuse all code and implement the differences in the child classes.  After all, avoiding code duplication is a good thing.  Then I started writing my unit tests...

The problem was the inherited code.  The base class had complex logic with its own dependencies.  There was a lot of mocking to do.  And because each child class needed its own unit tests, all of the mocking required for the base class logic had to be done for both child class unit tests.  Consider the example code below and the unit tests required to test it.

This is the abstract base class, which requires its own dependencies.  As you can see, the `doSharedWork()` method contains the shared logic used by both classes:

	public abstract class BaseClass {
	
		private final Dependency dep1;
		private final Dependency dep2;
		
		public BaseClass(Dependency dep1, Dependency dep2) {
			this.dep1 = dep1;
			this.dep2 = dep2;
		}
		
		public abstract void doWork();
		
		protected boolean doSharedWork() {
			if (dep1.doWork()) {
				return dep2.doWork();
			} else {
				return false;
			}
		}
	}

This is the first child class:

	public class ChildClass1 extends BaseClass {
	
		public ChildClass1(Dependency dep1, Dependency dep2) {
			super(dep1, dep2);
		}
		
		@Override
		public void doWork() {
			// do some work

			// use the shared code
			super.doSharedWork();

			// do some more work
		}
	}

And this is the second child class:

	public class ChildClass2 extends BaseClass {
	
		public ChildClass2(Dependency dep1, Dependency dep2) {
			super(dep1, dep2);
		}
		
		@Override
		public void doWork() {
			// do some different work

			// use the shared code
			super.doSharedWork();

			// do some more different work
		}
	}

And now for the unit tests.  Here is the sample test class for the first child class:

	public class ChildClass1Test {
	
		@Mock
		private Dependency dep1;
		@Mock
		private Dependency dep2;
		
		private ChildClass1 instance;
		
		@Before
		public void setUp() throws Exception {
			MockitoAnnotations.initMocks(this);		
			instance = new ChildClass1(dep1, dep2);
		}
	
		@Test
		public void test() {		
			when(dep1.doWork()).thenReturn(true);
			when(dep2.doWork()).thenReturn(true);
			
			assertTrue(instance.doWork());		
		}
	}

And here is the sample test class for the second child class:

	public class ChildClass2Test {
	
		@Mock
		private Dependency dep1;
		@Mock
		private Dependency dep2;
		
		private ChildClass2 instance;
		
		@Before
		public void setUp() throws Exception {
			MockitoAnnotations.initMocks(this);		
			instance = new ChildClass2(dep1, dep2);
		}
	
		@Test
		public void test() {		
			when(dep1.doWork()).thenReturn(true);
			when(dep2.doWork()).thenReturn(true);
			
			assertTrue(instance.doWork());		
		}
	}

While the example is trivial, it illustrates the problem I ran into:  the mocking required in the unit tests is duplicated in both of the child class tests.  While I avoid duplicate code in the code, I require duplicate code in my unit tests.

In my real world case, the shared code was much more complicated, with more dependencies and branches of execution.  While I could have continued with this approach, I decided to refactor the code to simplify testing.  I used one of the techniques discussed in Joshua Bloch's Effective Java books:  *Favor composition over inheritance*.  Instead of inheriting the shared code from an abstract base class, I decided to move the shared functionality to a Utility class, and each Child class would *have* an instance of the Utility class. 

		Interface
		/ is-a	\
	Class1	   Class2
	   |  has-a	 |	
		UtilClass

First, I defined an interface for the child classes to implement:

	public interface Interface {
		boolean doWork();
	}

The `AbstractBaseClass` is no longer abstract, and is now a `UtilClass`.  It still contains the common code required by both child classes, and still requires the same dependencies.

	public class UtilClass {	
		private final Dependency dep1;
		private final Dependency dep2;	
		public UtilClass(Dependency dep1, Dependency dep2) {
			this.dep1 = dep1;
			this.dep2 = dep2;
		}	
		public boolean doSharedWork() {
			if (dep1.doWork()) {
				return dep2.doWork();
			} else {
				return false;
			}
		}
	}

The child classes look mostly the same, except that they now only depend on the `UtilClass`, and no longer depend on what the `UtilClass` needs.

	public class ChildClass1 implements Interface {
	
		private final UtilClass util;
		
		public ChildClass1(UtilClass util) {
			this.util = util;
		}
		
		@Override
		public boolean doWork() {
			// do some work
			util.doSharedWork();
			// do some more work
			return true;
		}
	}

	public class ChildClass2 implements Interface {
	
		private final UtilClass util;
		
		public ChildClass2(UtilClass util) {
			this.util = util;
		}
		
		@Override
		public boolean doWork() {
			// do some different work
			util.doSharedWork();
			// do some more different work
			return true;
		}
	}

Now that the code is refactored, we can see how this changes the unit tests.  The first child class tests now only depends on the `UtilClass`, and the `UtilClass` dependencies no longer have to be mocked.

	public class ChildClass1Test {

		@Mock
		private UtilClass util;
		
		private ChildClass1 instance;
		
		@Before
		public void setUp() throws Exception {
			MockitoAnnotations.initMocks(this);		
			instance = new ChildClass1(util);
		}
	
		@Test
		public void test() {		
			when(util.doSharedWork()).thenReturn(true);		
			assertTrue(instance.doWork());		
		}
	}

Same goes for the second child class:

	public class ChildClass2Test {
	
		@Mock
		private UtilClass util;
		
		private ChildClass2 instance;
		
		@Before
		public void setUp() throws Exception {
			MockitoAnnotations.initMocks(this);		
			instance = new ChildClass2(util);
		}
	
		@Test
		public void test() {		
			when(util.doSharedWork()).thenReturn(true);		
			assertTrue(instance.doWork());		
		}
	}

And now we have a test class for the `UtilClass`:

	public class UtilClassTest {
	
		@Mock
		private Dependency dep1;
		@Mock
		private Dependency dep2;
		
		private UtilClass instance;
		
		@Before
		public void setUp() throws Exception {
			MockitoAnnotations.initMocks(this);		
			instance = new UtilClass(dep1, dep2);
		}
	
		@Test
		public void test() {		
			when(dep1.doWork()).thenReturn(true);
			when(dep2.doWork()).thenReturn(true);
			assertTrue(instance.doSharedWork());		
		}
	}

To summarize the example, the first solution using *inheritance* required me to test the shared code twice.  This is because the inherited code must be mocked in both child class unit tests.  By refactoring the code to use *composition* instead of *inheritance*, I am able to test each child class and mock the shared code.  Additionally, the shared code in the `UtilClass` is now testable by itself, and has its own unit tests.

The main point of the example is to illustrate how writing unit tests enabled me to discover a more maintainable solution by forcing myself to think about the problem again.  In the end, both solutions would solve the problem, but using *composition* in this case made the solution much easier to maintain and test, and avoided a lot of duplicate test code.