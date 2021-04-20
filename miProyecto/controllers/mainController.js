const rescatados = require('../modulos/rescatados');
const animalesArray = rescatados.animales;

const usuarios = require('../modulos/usuarios')
const usuariosArray = usuarios.usuarios


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
        return res.render('register', {title: 'Registrarse'})
    },

    login: function(req, res) {
        return res.render('login', { title: 'Iniciar Secion' });
    },

    search: function(req, res) {
       

        let perroArray = [];
        let gatoArray = [];

        animalesArray.forEach(element =>{
            if (element.class == 0){
                perroArray.push(element)
            } else {
                gatoArray.push(element)
            }
        })

        return res.render('search-results', { perroArray });
    },
    

    
}

module.exports = controller;