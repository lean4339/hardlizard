const index = require('./src/index')


module.exports = function(req,res){
    switch (req.url) {
        case '/':
            index.homePage(req,res)
            break;
        case '/preguntasFrecuentes':
            index.preguntasFrecuentes(req,res)
            break
        default:
            break;
    }
}
