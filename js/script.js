"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы поcмотрели?', '');

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const key = prompt('Один из последних просмотренных фильмов?', ''), 
          value = prompt('На сколько оцените его?', '');

    if (key.length < 50 && key == true && key != '' && value == true && value != '') {
        personalMuvieDB.movies[key] = value;
    } else {
        i--;
    }
}

if (personalMuvieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMuvieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMuvieDB);
