const fs = require('fs')

module.exports = {
    cartelera : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.cartelera, 'utf-8'));
    }
}