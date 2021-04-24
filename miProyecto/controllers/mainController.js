const rescatados = require('../modulos/rescatados');
const animalesArray = rescatados.animales;

const usuarios = require('../modulos/usuarios')
const usuariosArray = usuarios.index


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

    perfil: (req, res)=>{
        let usuario = usuariosArray
        return res.render('profile', {usuario, animalesArray})
    },
    users: function(req, res){
        let id = req.params.id
        let usuario ;

        for(let i = 0; i < usuariosArray.length; i++){
            if(usuariosArray[i].id == id){
                usuario = usuariosArray[i]
            } 
        }

        return res.render('profile', {usuario, animalesArray})
    },

    userEdit: (req, res)=> {
        let id = req.params.id
        let usuario ;

        for(let i = 0; i < usuariosArray.length; i++){
            if(usuariosArray[i].id == id){
                usuario = usuariosArray[i]
            } 
        }


        return res.render('profile-edit', usuario)
    }
}

module.exports = controller;