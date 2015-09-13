{extends file='main.tpl'}

{block name=content}
    <h1>Projects</h1>
    <p class="lead"></p>

	<div class="hero-unit">
		<h3>Oregon Trail Diseases and Deaths</h3>
		<p>Oregon Trail was a great game I grew up playing!  Now days, the occasionaly reference is made to someone dying of dysentery.  My co-workers and I were joking about it one day, so I decided to make a page where we could all kill each other with various diseases.  Have fun!</p>
 		<form action="/Oregon_Trail_Disease" method="GET">
		 	<fieldset>
		 		<legend>Oregon Trail Disease</legend>
		 		<label>Name</label>
				<input type="text" placeholder="Type a name..." name="name">
				<label>Disease</label>
				<input type="text" placeholder="Type a disease..." name="disease">
			    <button type="submit" class="btn">Submit</button>
		  </fieldset>
		</form>
 		<form action="/Oregon_Trail_Death" method="GET">
		 	<fieldset>
		 		<legend>Oregon Trail Death</legend>
		 		<label>Name</label>
				<input type="text" placeholder="Type a name..." name="name">
				<label>Disease</label>
				<input type="text" placeholder="Type a disease..." name="disease">
			    <button type="submit" class="btn">Submit</button>
		  </fieldset>
		</form>
	</div>
     
{/block}

