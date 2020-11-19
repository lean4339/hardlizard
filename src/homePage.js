
const fs = require('fs');

module.exports = {
    titleHomePage:'Título: Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.',
    bd : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    },
    orderedMovies: function(){
        const movies = this.leerJSON();

        movies.movies.sort(function(a, b) {
        if (a.title > b.title) {
          return 1;
        }
        else if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
      return movies;
    }
}




