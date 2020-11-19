const homePage = require('./homePage');
const FQ = require('./preguntasFrecuentes');
const masVotadas = require('./masVotadas');
const contacto = require('./contacto');
const enCartelera = require('./enCartelera')

module.exports = {
    homePage : function(req,res){
        const {total_movies} = homePage.leerJSON();

        res.write(`=============== Titulo: ${homePage.title} ==================\n`)
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
        /* console.log(mejores) */
        res.end()
    },
    enCartelera: function(req, res){
        enCartelera.peliculas().forEach(movie=>{
            res.write(`Titulos:\n${movie.title}\nReseña:\n${movie.overview}`)
        })
        res.end();
    },
}