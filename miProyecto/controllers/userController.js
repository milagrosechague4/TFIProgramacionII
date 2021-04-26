const rescatados = require('../modulos/rescatados');
const animalesArray = rescatados.animales;

const usuarios = require('../modulos/usuarios')
const usuariosArray = usuarios.index

module.exports = {

perfil: (req, res)=>{
    let usuario = usuariosArray[0]
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

userEdit: function(req, res) {

    let id = req.params.id
    let usuario ;

    for(let i = 0; i < usuariosArray.length; i++){
        if(usuariosArray[i].id == id){
            usuario = usuariosArray[i]
        } 
    }

    return res.render('profile-edit', {usuario});
}, 

}
