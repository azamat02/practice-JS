"use strict";

// First task
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);

//Second task
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actord: {},
    genres: [],
    privat: false
};
