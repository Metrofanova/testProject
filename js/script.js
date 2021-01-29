"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы поcмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы поcмотрели?', '');
    }
}

start();

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const key = prompt('Один из последних просмотренных фильмов?', ''), 
              value = prompt('На сколько оцените его?', '');
    
        if (key.length < 50 && key == true && key != '' && value == true && value != '') {
            personalMuvieDB.movies[key] = value;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMuvieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMuvieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }  
}

detectPersonalLevel();

const showMyDB = function(hidden) {
    if (!hidden) {
        console.log(personalMuvieDB);
    }
};

showMyDB(personalMuvieDB.privat);

let writeYourGenres = function() {
    for (let i = 1; i <= 3; i++) {
        personalMuvieDB.genres[i - 1] = prompt(`Ваш любмый жанр под номером ${i}`);
    }  
};

writeYourGenres();

console.log(personalMuvieDB);
