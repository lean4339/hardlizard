const fs = require("fs");

module.exports = cosa  =  {
    titulo : "=============== Mas Votadas ==================\n ",
    bd: "./data/movies.json",
    leerjson : function (){
        
        return JSON.parse(fs.readFileSync(this.bd, "utf-8"));
        
        
    },
    cantidad : function (){
        let mejores = this.leerjson().movies.filter(function(peli){
           return peli.vote_average >= 7;
        })
            return mejores.length;
    },
    promedio : function (){
        let sumatoria = 0;
        let mejores = this.leerjson().movies.filter(function(pelis){
            return pelis.vote_average >= 7;
        })
        mejores.forEach(element => {
            sumatoria = sumatoria + element.vote_average;
        });
        return sumatoria.toFixed(2);
    },
    mejores : function(){
        let mejores = this.leerjson().movies.filter(function(peli){
            return peli.vote_average >=7;
        })
        
        return mejores;
    }
}
