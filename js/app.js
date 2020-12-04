"use strict";

// First task
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);

//Second task
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actord: {},
    genres: [],
    privat: false
};

// Third task
const lastSeenMovie = prompt("Один из последних просмотренных фильмов?"); 
const lastSeenMovieRate = prompt("На сколько оцените его?");
personalMovieDB.movies[lastSeenMovie] = lastSeenMovieRate; 
console.log(personalMovieDB);