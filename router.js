const index = require('./src/index')


module.exports = function(req,res){
    switch (req.url) {
        case '/':
            index.homePage(req,res)
            break;
        case '/preguntasFrecuentes':
            index.preguntasFrecuentes(req,res)
            break;
        case '/enCartelera':
            index.enCartelera(req,res)
            break;
        case '/sucursales':
            index.sucursales(req,res)
            break;
        case '/mas-votadas':
            index.masVotadas(req,res);
        case '/contacto':
            index.contacto(req,res);
            break;
        case '/en-cartelera':
            index.enCartelera(req,res);
            break; 
        default:
            res.write("ERROR 404! Page not found")
            res.end()
            break;
    }
}
