"use strict";

const personalMuvieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMuvieDB.count = +prompt('Сколько фильмов вы поcмотрели?', '');
        while (personalMuvieDB.count == '' || personalMuvieDB.count == null || isNaN(personalMuvieDB.count)) {
            personalMuvieDB.count = +prompt('Сколько фильмов вы поcмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''), 
                  b = prompt('На сколько оцените его?', '');
        
            if (a.length < 50 && a != null && a != '' && b != null && b != '') {
                personalMuvieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMuvieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMuvieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }  
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMuvieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (!personalMuvieDB.privat) {
            personalMuvieDB.privat = true;
        } else {
            personalMuvieDB.privat = false;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre =  prompt(`Ваш любмый жанр под номером ${i}`);
            if(genre === '' || genre == null) {
                console.log('Erorr');
                i--;
            } else {
                personalMuvieDB.genres[i - 1] = genre;
            }
        }
        personalMuvieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });  
    }
   
};

console.log(personalMuvieDB);