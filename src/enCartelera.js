const fs = require('fs')

module.exports = {
    titleCartelera: 'En Cartelera',
    cartelera : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.cartelera, 'utf-8'));
    }
}