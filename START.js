const films = prompt("Женя мы будем смотреть фильмы?", " ");
const parametrFilmsDB  = {
    count:films,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

const   a = prompt("Какие жанры ты любишь?", ""),
    b = prompt("Что бы ты хотела посмотреть сегодня?", ""),
    c = prompt("Почему ты хочешь посмотреть именно этот фильм?", ""),
    d = prompt("На чём остановились?", "");

parametrFilmsDB.movies[a] = b;
parametrFilmsDB.actors[c] = d;

for (let i = 0; i < 3; i++) {
    const   a = prompt("Какие жанры ты любишь?", ""),
        b = prompt("Что бы ты хотела посмотреть сегодня?", ""),
        c = prompt("Почему ты хочешь посмотреть именно этот фильм?", ""),
        d = prompt("На чём остановились?", "");

    if (a != null && b != null && c != null && d != null && a != "" && b != "" && c != "" && d != "" && a.length < 50) {
        parametrFilmsDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
    }

    if (parametrFilmsDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");

    } else if (parametrFilmsDB.count >= 10 && parametrFilmsDB.count , 30) {
        console.log("Вы классический зритель");

    } else if (parametrFilmsDB.count >= 30){
        console.log("Вы киноман");

    } else  {
        console.log("произошла ошибка");
    }




}

console.log(parametrFilmsDB);