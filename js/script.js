"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы поcмотрели?", "");

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

    for (let i = 0; i < 2; i++) {
        let key = true, 
            value = true;

        do {
            key = prompt("Какой последний просмотренный фильм?", "");
            value = prompt("На сколько оцените его?", "");
            
        } while (key.length > 50 && key !== true || key == '' && value !== true || value == '');
        
        personalMuvieDB.movies[key] = value;
    }

console.log(personalMuvieDB);
