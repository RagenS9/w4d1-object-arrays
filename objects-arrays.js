// node objects-arrays.js

// object literal. in both of these pairs, the first is the long way of doing it. the second is a the shortcut.
var list = new Array(1, 2, 3);
var list = [1, 2, 3];

var object = new Object();
var object = {};


//  Object literal with properties. isFull is the key. false is the property. oz is the key. 16 is the property.
var waterBottle ={
    isFull: false,
    oz: 16
    drink: function() {
        return 'drank';
    }
    // when you use a function, the key is now called a method. function has to be anonymous because we've already given it a name with the method. Here the name is called drink. Method is still technically a property.
    // you can use an existing function.
}
function drink() {
    return 'drank';
}

var waterBottle ={
    isFull: false,
    oz: 16
    drink: drink
    // you can use an existing function and refer to it rather than typing it all out within the properties.
};

// anytime you call a function, you put it in parens.
console.log(waterBottle.oz)
conslog.log(watterBottle.isFull)
console.log(waterBottle.drink())

// no idea what he said here. something about an array being both a both a property and an object
var Array = {
    length: 15,
    pop: function () {}
}

// ajax
fetch('http://swapi.co/api/films/1')
.then(function (res {
    return res.json();

    // there was more here, but he moved the screen too fast to see anything.
// }))

var movies = [
	'Pulp Fiction',
	'Frozen',
    'Ex Machina',
    'The Goonies'
];

// lis all of the movies in the array
console.log(movies);

// tell me how many movies there are.
console.log(movies.length);

// tell me which movie is in the first slot.
console.log(movies[0]);

// to uppercase one of the movies by id-ing which slot gets uppercased.
console.log(movies [0].toUpperCase());

// changing one of the movies by telling it which slot to replace
movies[1] = 'Wall-E';
console.log(movies);

// pop pops the last one off of the end and give it to you AND will modify the original array so it no longer has the item in it
console.log(movies.pop());
console.log(movies);
// // common case for using this is if you're running off a loop and pop off the last one each time you run the loop.

// // using split and pop to make an array and record the part you want.
var emailAddress = 'ragens9@att.net';
var domainName = emailAddress.split('@').pop(); //turns this into an arry, and then can do pop off of it.
console.log(domainName);

// there's an unshift that takes off the first item of the array. he says he doesn't see that used as much.

console.log(movies.slice(1,2));

// Array Literal, with values. 
// this array has four objects.
// couldn't get this to console log.

var movies = [
    {
        title: 'Pulp Fiction',
        year: 1996
    },
    {
        title: 'Frozen',
        year: 2014
    },
    {
        title: 'Ex Machina',
        year: 2015
    },
    {
        title: 'The Goonies',
        year: 1986
    },
];
// if we want to list these one at a time on a site, we use a loop. for . . .
// but this is the old way of doing it. it is called imperative coding. sometimes employers will ask you to do this with the for loop. 
// imperative code is really easy to make bugs in it because it doesn't know what it's wanting to do.
for (var i = 0; i < movies.length; i++) {
    var movieTitle = movies[i].title;
    console.log(movieTitle);
}

// new way. declarative coding. here we have the plural variable, and when we call the function by the singular (but you could call it anything you wanted like blah or thing or x, but it's hard to know what you're talking about when you go back to look at the code later.)
movies.forEach(function(movie) {
    console.log(movie);
    console.log(movie.title);
    console.log(movie.year);
});

// another approach is to give it a name so that you can use it:

movies.forEach(logMovie);

function logMovie(movie) {
    console.log(movie);
    console.log(movie.title);
    console.log(movie.year);
}

//Another example using prices. Any array you can loop over it with forEach. Here we're telling it to add a dollar sign to the start of the price. forEach doesn't return anything at all. So make a var for it to work with (here, we used var total).
var prices = [12.54, 12.68, 12.78, 12.00];
var total = 0;

prices.forEach(showPrices);

function showPrices(price) {
    console.log('$' + price);
}

function showPrices(price) {
    total += price;
}

console.log(total);

// this isn't a great way to do a pricing total, because it has to go outside of the function to grab the prices.

// another way to do it.
var prices = [12.54, 12.68, 12.78, 12.00];

var total = prices.reduce(function(prev, next) {
    return prev + next;
}, 0);
console.log(total);
// the 0 at the end is important for reduce. it sets the initial value. you can put any value in it . . . true, false, another number . . . anything. reduce doesn't have to be math. you can concat a buncho of text strings together, too.  the final output of reduce is one thing. it takes all of the individual items in an array and combines them into one thing.

// can use that in a function and anyone could use it.
var prices = [12.54, 12.68, 12.78, 12.00];
var total = getTotal(prices);
function getTotal() {
    return prices.reduce(function(first, second) {
        return first + second;
    }, 0);
}
console.log(total); 

//for each method
var movies = [
    {
        title: 'Pulp Fiction',
        year: 1996
    },
    {
        title: 'Frozen',
        year: 2014
    },
    {
        title: 'Ex Machina',
        year: 2015
    },
    {
        title: 'The Goonies',
        year: 1986
    },
];

var movieTitles = [];

movies.forEach(function(movie) {
    movieTitles.push(movie.title);
});

console.log(movieTitles);
// but this method is not independent. have to go out to get the info.
// also, the variable has to be defined in order to work, and variables are defined at the top of the code, so it's very easy because the code would be separate from the variable to introduce errors or not even realize that the variable hadn't been defined.
// push adds a new item onto the end of an array. We'll use this all of the time.

//map method
var movies = [
    {
        title: 'Pulp Fiction',
        year: 1996
    },
    {
        title: 'Frozen',
        year: 2014
    },
    {
        title: 'Ex Machina',
        year: 2015
    },
    {
        title: 'The Goonies',
        year: 1986
    },
];

var movieYears = getMovieYears(movies);

function getMovieYears(listofMovies) {
    return listofMovies.map(function(movie) {
        return movie.year;
});
}

console.log(movieYears);

// multiply each year by 100:
return movies.year * 100; //??not sure what he did here, he changed it before I could see it. D:

//  add a string onto the type
return movies.year + 'yr';

return movies.year + 'A.D.';

//could return an object
return {
    movieTitle: movie.title,
    movieYear: movie.year
}

//if you need to rename all of the keys, map is the way you need to get it done.

// can change the case.
return {
    movieTitle: movie.title.toUpperCase(),
    movieYear: movie.year
}

// say you want to filter the list down to just a searched term. you put everything in lower case so that it will match no matter what the user had put in. 
var names = ['Bart', 'Homer', 'Morty'];
var searchTerm = 'bart';

var matches = names.filter(function(name) {
    return name.toLowerCase() === searchTerm.toLowerCase(); //this will 
});
console.log(matches);

//say we want to find anything that has an "o" in it. 
// could use index but have to use this weird !== -1 or > -1 thing at the end because indexOf will return the character index of the match, and we want the whole name.  DON'T REALLY UNDERSTAND ALL OF THIS BUSINESS. it's still -1 even if the o was on slot 3. THIS IS SUPER OLD AND SOME PEOPLE WOULDN'T EVEN KNOW ABOUT IT.
// returns homer and morty.
var names = ['Bart', 'Homer', 'Morty'];
var searchTerm = 'o';

var matches = names.filter(function(name) {
    return name.toLowerCase() .indexOf(searchTerm.toLowerCase()) > -1;
});
console.log(matches);

//includes -- answer Homer and Morty. this is the good way to run a search. 
var names = ['Bart', 'Homer', 'Morty'];
var searchTerm = 'o';

var matches = names.filter(function(name) {
    return name.toLowerCase() .includes(searchTerm.toLowerCase()); //this is an expression
});
console.log(matches);

// did in class with Sophie:
var songs = [
    {
        title: 'My Shot',
        year: 2015,
        performer: 'Hamilton'
    },
    {
        title: 'The Schuyler Sisters',
        year: 2015,
        performer: 'Schuyler Sisters'
    },
    {
        title: 'Satisfied',
        year: 2015,
        performer: 'Angelica Schuyler'
    },
    {
        title: 'History Has Its Eyes On You',
        year: 2015,
        performer: 'Washington'
    }
];
var songTitles = getSongTitles(songs);
function getSongTitles(listOfSongs) {
    return listOfSongs.map(function(song) {
        return song.title;
    }); 
}
console.log(songTitles); 

// homework example of how to get to things:

console.log(items[0].listing_id)

// to get to the beer mug
console.log(items[0].tags[2])

var hasBeerMug = items.filter(function(item) {
    return item.tags.includes('beermug');
})

console.log(hasBeerMug);

