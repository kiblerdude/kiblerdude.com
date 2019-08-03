'use strict';

/* Controllers */

var kiblerdude = angular.module('kiblerdudeApp', []);

kiblerdude.controller('ScheduleController', function($scope) {
  $scope.schedule = [
  {
    "Date": "First Thursday of the Month",
    "Time": "Happy Hour",
    "Location": "Bleachers",
    "Link": "http://www.bleachersbarct.com/"
  },
  {
    "Date": "Third Friday of the Month",
    "Time": "Happy Hour",
    "Location": "Bleachers",
    "Link": "http://www.bleachersbarct.com/"
  }];
}); // End EventController

kiblerdude.controller('SongController', function($scope) {
  $scope.music = [{
    "Category":"80's & 90's",
    "Songs":[
      { "Artist":"10000 Maniacs", "Song":"Because the Night" },
      { "Artist":"Backstreet Boys", "Song":"As Long As You Love Me" },
      { "Artist":"Backstreet Boys", "Song":"I Want It That Way" },
      { "Artist":"Britney Spears", "Song":"One More Time" },
      { "Artist":"Cars", "Song":"Drive" },
      { "Artist":"Chris Isaak", "Song":"Wicked Game" },
      { "Artist":"Cutting Crew", "Song":"I Just Died In Your Arms Tonight" },
      { "Artist":"Dead or Alive", "Song":"You Spin Me Right Round" },
      { "Artist":"George Michael", "Song":"Faith" },
      { "Artist":"Inner Circle", "Song":"Sweat" },
      { "Artist":"INXS", "Song":"Don't Change" },
      { "Artist":"Modern English", "Song":"Melt With You" },
      { "Artist":"NSync", "Song":"Bye Bye Bye" },
      { "Artist":"NSync", "Song":"Tearin Up My Heart" },
      { "Artist":"Paula Abdul", "Song":"Straight Up" },
      { "Artist":"Phil Collins", "Song":"In the Air Tonight" },
      { "Artist":"Ramones", "Song":"I Wanna Be Sedated" },
      { "Artist":"REM", "Song":"Losing My Religion" },
      { "Artist":"REM", "Song":"The One I Love" },
      { "Artist":"Richard Marx", "Song":"Right Here Waiting" },
      { "Artist":"Roxette", "Song":"The Look" },
      { "Artist":"Sarah Mclachlan", "Song":"Building a Mystery" },
      { "Artist":"Simple Minds", "Song":"Don't You Forget About Me" },
      { "Artist":"Sting", "Song":"Fields of Gold" },
      { "Artist":"Tears For Fears", "Song":"Mad World" },
      { "Artist":"The Cure", "Song":"Love Song" },
      { "Artist":"The Fly", "Song":"Got You Where I Want You" },
      { "Artist":"Tommy Tutone", "Song":"Jenny 867-5309" },
      { "Artist":"Tracy Chapman", "Song":"Gimme One Reason", "new": true },
      { "Artist":"When In Rome", "Song":"I Promise" }
    ]
  },{
    "Category": "80's Rock",
    "Songs":[
      { "Artist":"Bon Jovi", "Song":"Its My Life" },
      { "Artist":"Bon Jovi", "Song":"Living on a Prayer" },
      { "Artist":"Cinderella", "Song":"Shake Me" },
      { "Artist":"Danzig", "Song":"Mother" },
      { "Artist":"Guns N Roses", "Song":"I Used To Love Her" },
      { "Artist":"Guns N Roses", "Song":"Knockin on Heavens Door" },
      { "Artist":"Guns N Roses", "Song":"Patience" },
      { "Artist":"Poison", "Song":"Every Rose Has Its Thorn" },
      { "Artist":"White Snake", "Song":"Here I Go Again" }
    ]
  },{
    "Category":"Alternative Rock",
    "Songs":[
      { "Artist":"3 Doors Down", "Song":"Kryptonite" },
      { "Artist":"Better Than Ezra", "Song":"Desperately Wanting" },
      { "Artist":"Bodines", "Song":"Closer To Free" },
      { "Artist":"Brand New", "Song":"The Quiet Things No One Ever Knows" },
      { "Artist":"Bush", "Song":"Comedown" },
      { "Artist":"Bush", "Song":"Glycerine" },
      { "Artist":"Duncan Sheik", "Song":"Barely Breathing" },
      { "Artist":"Eve 6", "Song":"Inside Out" },
      { "Artist":"Fuel", "Song":"Hemorrhage" },
      { "Artist":"Gavin Rosdale", "Song":"Love Remains The Same" },
      { "Artist":"Gin Blossums", "Song":"Here It From You" },
      { "Artist":"Goo Goo Dolls", "Song":"Black Balloon" },
      { "Artist":"Goo Goo Dolls", "Song":"Name" },
      { "Artist":"Goo Goo Dolls", "Song":"Slide" },
      { "Artist":"Greenday", "Song":"Basket Case" },
      { "Artist":"Greenday", "Song":"Good Riddance" },
      //{ "Artist":"Harvey Danger", "Song":"Flagpole Sitta" },
      { "Artist":"Hootie and the Blowfish", "Song":"Let Her Cry" },
      { "Artist":"Incubus", "Song":"Drive" },
	  { "Artist":"Jimmy Eat World", "Song":"The Middle" },
	  { "Artist":"Jimmy Eat World", "Song":"Praise Chorus" },
      { "Artist":"Linkin Park", "Song":"Numb" },
      { "Artist":"Live", "Song":"Lightning Crashes" },
      { "Artist":"Marcy Playground", "Song":"Sex and Candy" },
      { "Artist":"Matchbox 20", "Song":"3 a.m." },
      { "Artist":"Matchbox 20", "Song":"Push" },
      { "Artist":"Matchbox 20", "Song":"Unwell" },
      { "Artist":"Nirvana", "Song":"All Apologies" },
      { "Artist":"Nirvana", "Song":"Man Who Sold the World" },
      { "Artist":"Oasis", "Song":"Champagne Supernova" },
	  { "Artist":"Oasis", "Song":"Live Forever", "new": true },
      { "Artist":"Oasis", "Song":"Wonderwall" },
      { "Artist":"Offspring", "Song":"The Kids Aren't Alright" },
      { "Artist":"Radiohead", "Song":"Creep" },
      { "Artist":"Red Hot Chili Peppers", "Song":"Other Side" },
      { "Artist":"Red Hot Chili Peppers", "Song":"Under the Bridge" },
      { "Artist":"Seven Mary Three", "Song":"Cumbersome" },
      { "Artist":"Sister Hazel", "Song":"All For You" },
      { "Artist":"Smashing Pumpkins", "Song":"Today" },
      { "Artist":"Soul Asylum", "Song":"Runaway Train" },
      { "Artist":"Spin Doctors", "Song":"Two Princes" },
      { "Artist":"Stone Temple Pilots", "Song":"Plush" },
      { "Artist":"Sublime", "Song":"What I Got" },
      { "Artist":"The Calling", "Song":"Wherever You Will Go" },
      { "Artist":"The Proclaimers", "Song":"500 Miles" },
      { "Artist":"The Verve", "Song":"Bittersweet Symphony" },
      { "Artist":"The Verve Pipe", "Song":"The Freshmen" },
      { "Artist":"Tonic", "Song":"If You Could Only See" },
      { "Artist":"Vertical Horizon", "Song":"Everything You Want" },
	  { "Artist":"Violent Femmes", "Song":"Blister in the Sun" },
      { "Artist":"Wallflowers", "Song":"6th Avenue Heartache" },
      { "Artist":"Weezer", "Song":"Island In The Sun" }
    ]
  },{
    "Category":"Classic Rock",
    "Songs":[
      { "Artist":"America", "Song":"Sister Golden Hair" },
      { "Artist":"Bad Company", "Song":"Feel Like Making Love" },
      { "Artist":"Bob Seger", "Song":"Turn the Page" },
	  { "Artist":"Bruce Springsteen", "Song":"Dancing in the Dark", "new": true },
      { "Artist":"Bryan Adams", "Song":"Summer of 69" },
      { "Artist":"Creedence Clearwater Revival", "Song":"Bad Moon Rising" },
      { "Artist":"Creedence Clearwater Revival", "Song":"Have You Ever Seen the Rain" },
      { "Artist":"Dobie Gray", "Song":"Drift Away" },
      { "Artist":"Doors", "Song":"Light My Fire" },
      { "Artist":"Doors", "Song":"Riders on the Storm" },
      { "Artist":"Eagles", "Song":"Lyin Eyes" },
      { "Artist":"Eagles", "Song":"Take It Easy" },
      { "Artist":"Eagles", "Song":"Tequila Sunrise" },
      { "Artist":"Eric Clapton", "Song":"Wonderful Tonight" },
      { "Artist":"Harry Chapin", "Song":"Cats in the Cradle" },
      //{ "Artist":"Heart", "Song":"What About Love" },
      { "Artist":"Jackson Browne", "Song":"Doctor My Eyes" },
      { "Artist":"Jackson Browne", "Song":"Stay" },
      { "Artist":"Jefferson Airplane", "Song":"Somebody to Love" },
      { "Artist":"Jimi Hendrix", "Song":"All Along the Watchtower" },
      { "Artist":"Jimmy Buffet", "Song":"Come Monday" },
      { "Artist":"Jimmy Buffet", "Song":"Margaritaville" },
      { "Artist":"Jimmy Buffet", "Song":"Pirate Looks At 40" },
      { "Artist":"Jimmy Buffet", "Song":"Son of a Sailor" },
      { "Artist":"John Mellencamp", "Song":"Jack and Diane" },
      { "Artist":"John Mellencamp", "Song":"Wild Nights" },
      { "Artist":"Kenny Loggins", "Song":"Dannys Song" },
      { "Artist":"Lynyrd Skynyrd", "Song":"Tuesdays Gone" },
      { "Artist":"Marshall Tucker Band", "Song":"Can't You See" },
      { "Artist":"Neil Diamond", "Song":"Sweet Carolina" },
      { "Artist":"Neil Young", "Song":"Heart of Gold" },
      { "Artist":"Queen", "Song":"Crazy Little Thing Called Love" },
      { "Artist":"Rolling Stones", "Song":"Paint it Black" },
      { "Artist":"Rolling Stones", "Song":"Sympathy for the Devil" },
      { "Artist":"Stealer's Wheel", "Song":"Stuck In The Middle With You" },
      { "Artist":"Steppenwolf", "Song":"Born to be Wild" },
      { "Artist":"Supertramp", "Song":"Breakfast in America" },
      { "Artist":"The Band", "Song":"The Weight" },
      { "Artist":"The Outfield", "Song":"Your Love" },
      { "Artist":"Tom Petty", "Song":"American Girl" },
      { "Artist":"Tom Petty", "Song":"Free Fallin" },
      { "Artist":"Tom Petty", "Song":"Mary Jane's Last Dance" },
      { "Artist":"Tom Petty", "Song":"You Don't Know How It Feels" }
    ]
  },{
    "Category":"Classics",
    "Songs":[
      { "Artist":"Archies", "Song":"Sugar Sugar" },
      { "Artist":"Beatles", "Song":"A Little Help from my Friends" },
	  //{ "Artist":"Beatles", "Song":"Hey Jude", "new": true },
	  { "Artist":"Beatles", "Song":"In My Life", "new": true },
      { "Artist":"Beatles", "Song":"Let It Be" },
      { "Artist":"Beatles", "Song":"Revolution" },
      { "Artist":"Ben E. King", "Song":"Stand By Me" },
      { "Artist":"Bill Withers", "Song":"Lean On Me" },
      //{ "Artist":"Billy Joel", "Song":"Its Still Rock and Roll To Me" },
      { "Artist":"Billy Joel", "Song":"Piano Man" },
      { "Artist":"Buffalo Springfield", "Song":"For What It's Worth" },
      { "Artist":"Del Vikings", "Song":"Come Go With Me" },
      { "Artist":"Dion & The Belmonts", "Song":"Runaround Sue" },
      { "Artist":"Dion & The Belmonts", "Song":"Teenager In Love" },
      { "Artist":"Dion & The Belmonts", "Song":"Wanderer" },
      { "Artist":"Elvis", "Song":"Hound Dog" },
	  { "Artist":"Five Stairsteps", "Song":"Oooh Child" },
      { "Artist":"Gary Portney", "Song":"Where Everybody Knows Your Name" },
      { "Artist":"Gloria Gaynor", "Song":"I Will Survive" },
      { "Artist":"Grease", "Song":"Greased Lightning" },
      { "Artist":"Hermans Hermits", "Song":"I'm Into Something Good" },
      { "Artist":"James Taylor", "Song":"How Sweet It Is To Be Loved By You" },
      { "Artist":"Jim Croce", "Song":"Bad Bad Leroy Brown" },
      { "Artist":"Joe Cocker", "Song":"Aint No Sunshine" },
      { "Artist":"John Lennon", "Song":"Imagine" },
      { "Artist":"Kermit the Frog", "Song":"Rainbow Connection" },
      { "Artist":"Manfred Man", "Song":"Doo Wah Diddy" },
      { "Artist":"Otis Redding", "Song":"Dock of the Bay" },
      { "Artist":"Paul Simon", "Song":"Kodachrome" },
      { "Artist":"Searchers", "Song":"Love Potion #9" },
      { "Artist":"Van Morrison", "Song":"Brown Eyed Girl" }
    ]
  },{
    "Category":"Country",
    "Songs":[
      { "Artist":"Alabama", "Song":"Dixieland Delight" },
      { "Artist":"Darius Rucker", "Song":"Wagon Wheel" },
      { "Artist":"David Allen Coe", "Song":"You Don't Even Call Me By My Name" },
      { "Artist":"Garth Brooks", "Song":"That Summer" },
      { "Artist":"Garth Brooks", "Song":"The River" },
      { "Artist":"Garth Brooks", "Song":"Wrapped Up In You" },
      { "Artist":"George Strait", "Song":"Carrying Your Love With Me" },
      { "Artist":"Hank Williams Jr", "Song":"Family Tradition" },
      { "Artist":"Jamey Johnson", "Song":"In Color" },
      { "Artist":"Johnny Cash", "Song":"Folsom Prison Blues" },
      { "Artist":"Johnny Lee", "Song":"Lookin for Love" },
      { "Artist":"Pure Prairie League", "Song":"Amie" },
      { "Artist":"Tim McGraw", "Song":"I Like it I Love it" },
      { "Artist":"Zac Brown Band", "Song":"Chicken Fried" },
	  { "Artist":"Zac Brown Band", "Song":"Toes", "new":true }
    ]
  },{
    "Category":"Other Stuff",
    "Songs":[
      { "Artist":"Damien Rice", "Song":"Delicate" },
      { "Artist":"Death Cab for Cutie", "Song":"I Will Follow You Into the Dark" },
      { "Artist":"Foster The People", "Song":"Pumped Up Kicks" },
      { "Artist":"Howie Day", "Song":"Collide" },
      { "Artist":"Iron and Wine", "Song":"Flightless Bird American Mouth" },
      { "Artist":"Jace Everett", "Song":"Bad Things" },
      { "Artist":"Jack Johnson", "Song":"Flake" },
      { "Artist":"Jason Mraz", "Song":"I'm Yours" },
      { "Artist":"Jeff Buckley", "Song":"Hallelujah" },
      { "Artist":"Kings of Leon", "Song":"Use Somebody" },
	  { "Artist":"Lil Nas", "Song":"Old Town Road", "new":true },
      { "Artist":"Lumineers", "Song":"Ho Hey" },
      { "Artist":"Maroon 5", "Song":"This Love" },
      { "Artist":"One Republic", "Song":"Counting Stars" },
      { "Artist":"Plain White Ts", "Song":"Hey There Delilah" }
    ]
  }];

  $scope.totalSongs = 0;

  angular.forEach($scope.music, function(value, key) {
    //console.log(key + " " + value.Songs.length);
    $scope.totalSongs += value.Songs.length;
  });

}); // end SongController
