const rescatados = require('../modulos/rescatados');
const animalesArray = rescatados.animales;


let controller = {
    index: function(req, res) {
        
        let perroArray = [];
        let gatoArray = [];

        animalesArray.forEach(element =>{
            if (element.class == 0){
                perroArray.push(element)
            } else {
                gatoArray.push(element)
            }
        })

        return res.render('index', {perroArray, gatoArray});
    },

    register: function(req, res){
        return res.render('register', {title: 'hola'})
    },

    login: function(req, res) {
        return res.render('login', { title: 'Registrarse' });
    },

    search: function(req, res) {
        return res.render('search-results', { title: 'Buscador' });
    }
}

module.exports = controller;