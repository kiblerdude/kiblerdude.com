'use strict';

/* Controllers */

var kiblerdude = angular.module('kiblerdudeApp', []);

kiblerdude.controller('ScheduleController', function($scope) {
  $scope.schedule = [{
    "Date": "Every Wednesday (usually)",
    "Time": "8pm-11pm (Open Mic)",
    "Location": "Spill Wine Bar",
    "Link":"http://spillwinebar.com/"
  },{
    "Date": "Saturday, August 15, 2015",
    "Time": "8pm-11pm",
    "Location": "Spill Wine Bar",
    "Link": "http://spillwinebar.com/"
  }];
}); // End EventController

kiblerdude.controller('SongController', function($scope) {
  $scope.music = [{
    "Category":"80's & 90's",
    "Songs":[
      { "Artist":"Cars", "Song":"Drive" },
      { "Artist":"Dead or Alive", "Song":"You Spin Me Right Round" },
      { "Artist":"Inner Circle", "Song":"Sweat" },
      { "Artist":"INXS", "Song":"Don't Change" },
      { "Artist":"Modern English", "Song":"Melt With You" },
      { "Artist":"Phil Collins", "Song":"In the Air Tonight" },
      { "Artist":"Ramones", "Song":"I Wanna Be Sedated" },
      { "Artist":"REM", "Song":"The One I Love" },
      { "Artist":"Richard Marx", "Song":"Right Here Waiting" },
      { "Artist":"Roxette", "Song":"The Look" },
      { "Artist":"Sarah Mclachlan", "Song":"Building a Mystery" },
      { "Artist":"Simple Minds", "Song":"Don't You Forget About Me" },
      { "Artist":"Sting", "Song":"Fields of Gold" },
      { "Artist":"Tears For Fears", "Song":"Mad World" },
      { "Artist":"The Cure", "Song":"Love Song" },
      { "Artist":"The Fly", "Song":"Got You Where I Want You" }
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
      { "Artist":"Eve 6", "Song":"Inside Out" },
      { "Artist":"Gavin Rosdale", "Song":"Love Remains The Same" },
      { "Artist":"Goo Goo Dolls", "Song":"Name" },
      { "Artist":"Greenday", "Song":"Good Riddance" },
      { "Artist":"Hootie and the Blowfish", "Song":"Let Her Cry" },
      { "Artist":"Marcy Playground", "Song":"Sex and Candy" },
      { "Artist":"Matchbox 20", "Song":"Push" },
      { "Artist":"Nirvana", "Song":"Man Who Sold the World" },
      { "Artist":"Oasis", "Song":"Wonderwall" },
      { "Artist":"Offspring", "Song":"The Kids Aren't Alright" },
      { "Artist":"Red Hot Chili Peppers", "Song":"Other Side" },
      { "Artist":"Red Hot Chili Peppers", "Song":"Under the Bridge" },
      { "Artist":"Seven Mary Three", "Song":"Cumbersome" },
      { "Artist":"Sister Hazel", "Song":"All For You" },
      { "Artist":"Soul Asylum", "Song":"Runaway Train" },
      { "Artist":"Stone Temple Pilots", "Song":"Plush" },
      { "Artist":"The Calling", "Song":"Wherever You Will Go" },
      { "Artist":"The Proclaimers", "Song":"500 Miles" },
      { "Artist":"The Verve Pipe", "Song":"The Freshmen" },
      { "Artist":"Tonic", "Song":"If You Could Only See" },
      { "Artist":"Vertical Horizon", "Song":"Everything You Want" },
      { "Artist":"Wallflowers", "Song":"6th Avenue Heartache" }
    ]
  },{
    "Category":"Classic Rock",
    "Songs":[
      { "Artist":"America", "Song":"Sister Golden Hair" },
      { "Artist":"Bad Company", "Song":"Feel Like Making Love" },
      { "Artist":"Bob Seger", "Song":"Turn the Page" },
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
      { "Artist":"Heart", "Song":"What About Love" },
      { "Artist":"Jackson Browne", "Song":"Doctor My Eyes" },
      { "Artist":"Jackson Browne", "Song":"Stay" },
      { "Artist":"Jefferson Airplane", "Song":"Somebody to Love" },
      { "Artist":"Jimi Hendrix", "Song":"All Along the Watchtower" },
      { "Artist":"Jimmy Buffet", "Song":"Come Monday" },
      { "Artist":"Jimmy Buffet", "Song":"Margaritaville" },
      { "Artist":"Jimmy Buffet", "Song":"Pirate Looks At 40" },
      { "Artist":"Jimmy Buffet", "Song":"Son of a Sailor" },
      { "Artist":"John Mellencamp", "Song":"Wild Nights" },
      { "Artist":"Kenny Loggins", "Song":"Dannys Song" },
      { "Artist":"Lynard Skynard", "Song":"Tuesdays Gone" },
      { "Artist":"Marshall Tucker Band", "Song":"Can't You See" },
      { "Artist":"Neil Young", "Song":"Heart of Gold" },
      { "Artist":"Queen", "Song":"Crazy Little Thing Called Love" },
      { "Artist":"Rolling Stones", "Song":"Paint it Black" },
      { "Artist":"Rolling Stones", "Song":"Sympathy for the Devil" },
      { "Artist":"Steppenwolf", "Song":"Born to be Wild" },
      { "Artist":"The Band", "Song":"The Weight" },
      { "Artist":"The Outfield", "Song":"Your Love" },
      { "Artist":"Tom Petty", "Song":"You Don't Know How It Feels" }
    ]
  },{
    "Category":"Classics",
    "Songs":[
      { "Artist":"Archies", "Song":"Sugar Sugar" },
      { "Artist":"Beatles", "Song":"A Little Help from my Friends" },
      { "Artist":"Beatles", "Song":"Let It Be" },
      { "Artist":"Bill Withers", "Song":"Lean On Me" },
      { "Artist":"Billy Joel", "Song":"Its Still Rock and Roll To Me" },
      { "Artist":"Billy Joel", "Song":"Piano Man" },
      { "Artist":"Buffalo Springfield", "Song":"For What It's Worth" },
      { "Artist":"Cheers", "Song":"Where Everybody Knows Your Name" },
      { "Artist":"Del Vikings", "Song":"Come Go With Me" },
      { "Artist":"Dion", "Song":"Runaround Sue" },
      { "Artist":"Dion", "Song":"Teenager In Love" },
      { "Artist":"Dion", "Song":"Wanderer" },
      { "Artist":"Elvis", "Song":"Hound Dog" },
      { "Artist":"Grease", "Song":"Greased Lightning" },
      { "Artist":"James Taylor", "Song":"How Sweet It Is To Be Loved By You" },
      { "Artist":"Jim Croce", "Song":"Bad Bad Leroy Brown" },
      { "Artist":"Joe Cocker", "Song":"Aint No Sunshine" },
      { "Artist":"John Lennon", "Song":"Imagine" },
      { "Artist":"Kermit the Frog", "Song":"Rainbow Connection" },
      { "Artist":"Manfred Man", "Song":"Doo Wah Diddy" },
      { "Artist":"Otis Redding", "Song":"Dock of the Bay" },
      { "Artist":"Searchers", "Song":"Love Potion #9" }
    ]
  },{
    "Category":"Country",
    "Songs":[
      { "Artist":"Alabama", "Song":"Dixieland Delight" },
      { "Artist":"David Allen Coe", "Song":"You Don't Even Call Me By My Name" },
      { "Artist":"Garth Brooks", "Song":"That Summer" },
      { "Artist":"Garth Brooks", "Song":"The River" },
      { "Artist":"George Strait", "Song":"Carrying Your Love With Me" },
      { "Artist":"Johnny Cash", "Song":"Folsom Prison Blues" },
      { "Artist":"Johnny Lee", "Song":"Lookin for Love" },
      { "Artist":"Pure Prairie League", "Song":"Amie" },
      { "Artist":"Tim McGraw", "Song":"I Like it I Love it" }
    ]
  },{
    "Category":"Millennium Rock",
    "Songs":[
      { "Artist":"Damien Rice", "Song":"Delicate" },
      { "Artist":"Death Cab for Cutie", "Song":"I Will Follow You Into the Dark" },
      { "Artist":"Foster The People", "Song":"Pumped Up Kicks" },
      { "Artist":"Howie Day", "Song":"Collide" },
      { "Artist":"Iron and Wine", "Song":"Flightless Bird American Mouth" },
      { "Artist":"Jace Everett", "Song":"Bad Things" },
      { "Artist":"Jack Johnson", "Song":"Flake" },
      { "Artist":"Jeff Buckley", "Song":"Hallelujah" },
      { "Artist":"One Republic", "Song":"Counting Stars" }
    ]
  }];

  $scope.totalSongs = 0;

  angular.forEach($scope.music, function(value, key) {
    //console.log(key + " " + value.Songs.length);
    $scope.totalSongs += value.Songs.length;
  });

}); // end SongController