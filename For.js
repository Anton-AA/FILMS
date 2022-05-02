
const films = prompt("мы будем смотреть фильмы?", " ");

const profitFilmsDB  = {
        count:films,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
};



for (let i = 0; i < 3; i++) { 
const   a = prompt("Какие жанры ты любишь?", ""),
        b = prompt("Что бы ты хотела посмотреть сегодня?", ""),
        c = prompt("Почему ты хочешь посмотреть именно этот фильм?", ""),
        d = prompt("На чём остановились?", "");

        if (a != null && b != null && c != null && d != null && a != "" && b != "" && c != "" && d != "" && a.length < 50) {
            profitFilmsDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
        }

        if (profitFilmsDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
            
        } else if (profitFilmsDB.count >= 10 && profitFilmsDB.count  <= 30) {
            console.log("Вы классический зритель");

        } else if (profitFilmsDB.count > 30){
            console.log("Вы киноман");

        } else  {
            console.log("произошла ошибка");
        }


       
    
  }

console.log(profitFilmsDB);