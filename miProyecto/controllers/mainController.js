const rescatados = require('../modulos/rescatados');
const perrosArray = rescatados.perros;
const gatosArray = rescatados.gatos;

let controller = {
    index: function(req, res) {
        
        return res.render('index', {perrosArray});
    },

    register: function(req, res){
        return res.render('register', {title: 'hola'})
    },

    login: function(req, res) {
        return res.render('login', { title: 'Registrarse' });
    },
}

module.exports = controller;
