//Practice 1

// First task
let numberOfFilms;
console.log(numberOfFilms);

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();

//Second task
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actord: {},
    genres: [],
    privat: false
};

// Third task
// let a = prompt("Один из последних просмотренных фильмов?"), 
//     b = prompt("На сколько оцените его?"),
//     c = prompt("Один из последних просмотренных фильмов?"), 
//     d = prompt("На сколько оцените его?");

// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d; 
// console.log(personalMovieDB);

//Practice 2
//Task 1
// for (let i = 0; i < 3; i++){
//     let questionOne = prompt("Один из последних просмотренных фильмов?"),
//         questionTwo = prompt("На сколько оцените его?");
//     personalMovieDB.movies[questionOne] = questionTwo;
// }

//Task 2

function rememberMyFilms() {
    for (let i = 0; i < 3; i++){
        let questionOne = prompt("Один из последних просмотренных фильмов?"),
            questionTwo = prompt("На сколько оцените его?");
        while (questionOne == null || questionOne.length == 0 || questionOne.length >=50) {
            alert("Название фильма не должна быть пустой и больше чем 50 символов!");
            questionOne = prompt("Один из последних просмотренных фильмов?");
            questionTwo = prompt("На сколько оцените его?");
        }
        personalMovieDB.movies[questionOne] = questionTwo;
    }
}

rememberMyFilms();

// Task 3
function detectPersonalFilm() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов!");
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
        console.log("Вы классический зритель!");
    } else if (personalMovieDB.count >=30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalFilm();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(genres){
    for (let i = 1; i <= 3; i ++){
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        genres[i-1] = genre;
    }
}

writeYourGenres(personalMovieDB.genres);

console.log(personalMovieDB);