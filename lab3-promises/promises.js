'use strict';

// #1
function addTwo(x) {
	var promise = new Promise(function(resolve, reject) {
		resolve(1);
	});
	
	promise.then(function() {
		console.log(x);
		return x++;
	})
	.then(function() {
		return x++;
	})
	.then(function() {
		console.log(x);
	});
}

addTwo(1);

// #2
var http = require('http');

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual request stuff
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            resolve(body);
        });
    }).on('error', function(err) {
        reject(err);
    });
  });
};

function getMovie(movieId) {
	get("http://www.omdbapi.com/?i=" + movieId + "&plot=short&r=json")
	.then(function(result) {
		console.log(JSON.parse(result));
	}).catch(function(err) {
		console.error(err);
	});
}

getMovie("tt0120737");

// #3
function getThreeMovies(id1, id2, id3) {
	get("http://www.omdbapi.com/?i=" + id1 + "&plot=short&r=json")
	.then(function(result) {
		console.log(JSON.parse(result));
	})
	get("http://www.omdbapi.com/?i=" + id2 + "&plot=short&r=json")
	.then(function(result) {
		console.log(JSON.parse(result));
	})
	get("http://www.omdbapi.com/?i=" + id3 + "&plot=short&r=json")
	.then(function(result) {
		console.log(JSON.parse(result));
	}).catch(function(err) {
		console.error(err);
	});
}

getThreeMovies("tt0120737", "tt0120738", "tt0120739")


// #4 (DONT WORK YET DOE)

// function getThreeMoviesConcurrently(id1, id2, id3) {
// 	Promise.all(getThreeMovies('id1', 'id2', 'id3'));
// }

// getThreeMoviesConcurrently("tt0120737", "tt0120738", "tt0120739");
