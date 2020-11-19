
const { Console } = require('console');
const fs = require('fs');
const { title } = require('process');
const { enCartelera } = require('.');
const { leerJSON } = require('./homePage');

module.exports = {
    cartelera : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.cartelera, 'utf-8'));
    }
}


function peliculas(movie){
    peliculas = []
    LeerJSON.peliculas.push(movie,title).movies.forEach((movie)=>{
       })
    return peliculas;
}
