const homePage = require('./homePage');
const FQ = require('./preguntasFrecuentes');
const masVotadas = require('./masVotadas');
const contacto = require('./contacto');
const sucursales = require('./sucursales');
const enCartelera = require('./enCartelera');

module.exports = {
    homePage : function(req,res){
        const {total_movies} = homePage.leerJSON();

        res.write(`=============== Titulo: ${homePage.titleHomePage} ==================\n`)
        res.write('\n')
        res.write(`=============== Cantidad peliculas: ${total_movies} ==================\n`)
        res.write('\n')
        res.write('===============Peliculas Ordenadas====================\n')

        const orderedMovies = homePage.orderedMovies();
        orderedMovies.movies.forEach((movie, i) => {
            res.write(`${i} - ${movie.title} \n `)
        });
        res.write('\n')

        res.write('=============== Recordá que podés visitar las secciones : \n -En Cartelera \n -Más Votadas \n -Sucursales \n -Contacto \n -Preguntas frecuentes \n =============== ')
  
        res.end();
    
    },
    preguntasFrecuentes : function(req,res){

        const {total_faqs} = FQ.leerJSON();

        res.write(`=============== Titulo: ${FQ.title} ==================\n`)
        res.write('\n')
        res.write(`=============== Cantidad preguntas: ${total_faqs} ==================\n`)
        res.write('\n')
        res.write('=============== Todas las preguntas ====================\n')

        FQ.listOfQuestions().forEach((p, i) => {
            res.write(`${i}) Title: ${p.faq_title} \n `)
            res.write(`Reply: ${p.faq_answer} \n \n`)
            res.write(`-------- \n`)
        });

        res.end();

    },
    masVotadas: function(req,res){
        res.write(`${masVotadas.titulo}`);
        res.write('\n \n');
        res.write(`Total de peliculas: ${masVotadas.cantidad()}`)
        res.write('\n \n');
        res.write(`Promedio: ${masVotadas.promedio()}`)
        res.write('\n \n');
        let mejores = masVotadas.mejores();
        mejores.forEach(element => {
            res.write(`Titulo: ${element.title}\n`);
            res.write(`Promedio: ${element.vote_average}\n`);
            res.write(`Reseña: ${element.overview}`);
            res.write('\n \n');

        });

        res.end()
    },

    enCartelera : function(req,res){

        const {total_movies, movies} = enCartelera.leerJSON();

        res.write(`=============== ${enCartelera.titleCartelera} ==================\n`)
        res.write('\n')
        res.write(`============ === Total de peliculas : ${total_movies} ==================\n`)
        res.write('\n')
        res.write('=============== Lista de peliculas ====================\n \n')

        movies.forEach((p, i) => {
            res.write(`${i}) Title: ${p.title} \n `)
            res.write(`overview: ${p.overview} \n \n`)
        });

        res.end();

    },

    sucursales : function(req,res){

        const {total_theaters, theaters} = sucursales.leerJSON();

        res.write(`=============== ${sucursales.titleTheaters} ==================\n`)
        res.write('\n')
        res.write(`=============== Total de salas : ${total_theaters} ==================\n`)
        res.write('\n')
        res.write('=============== Lista de salas ====================\n')

        theaters.forEach((t, i) => {
            res.write(`${i}) Title: ${t.name} \n `)
            res.write(`Address: ${t.address} \n \n`)
            res.write(`Decription: ${t.description} \n \n`)
        });

        res.end();

    },
    contacto: function(req,res){
        res.write(`================== TITULO: ====================\n\n`);
        res.write(`\t\t${contacto.title}\n\n`);
        res.write(`================== CONTACTO ====================\n\n`);
        res.write(`${contacto.content}`);
        res.end();
    },
}