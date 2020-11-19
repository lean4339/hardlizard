
const fs = require('fs');

module.exports = {
    titleFQ:'Título: Preguntas Frecuentes.',
    bd : './data/faqs.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    },
    listOfQuestions: function(){
        const {faqs} = this.leerJSON();
        return faqs;
    }
}