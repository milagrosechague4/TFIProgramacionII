const rescatados = require('../modulos/rescatados');
const { search } = require('../routes');
const perrosArray = rescatados.perros;
const gatosArray = rescatados.gatos;

let controller = {
    index: function(req, res) {
        
        return res.render('index', {perrosArray, gatosArray});
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