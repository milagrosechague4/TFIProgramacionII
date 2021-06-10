const rescatados = require('../modulos/rescatados');
const animalesArray = rescatados.animales;

const usuarios = require('../modulos/usuarios')
const usuariosArray = usuarios.index

const db = require('../database/models');
const bcrypjs = require('bcryptjs');
const op = db.Sequelize.Op;
module.exports = {

    index: (req, res)=>{
        let usuario = usuariosArray[0]
    return res.render('profile', {usuario, animalesArray})
    },

    show: function(req, res){
        let id = req.params.id
        let usuario ;

        for(let i = 0; i < usuariosArray.length; i++){
            if(usuariosArray[i].id == id){
                usuario = usuariosArray[i]
            } 
        }

        return res.render('profile', {usuario, animalesArray})
    },

    update: function(req, res) {

        let id = req.params.id
        let usuario ;

        for(let i = 0; i < usuariosArray.length; i++){
            if(usuariosArray[i].id == id){
                usuario = usuariosArray[i]
            } 
        }

        return res.render('profile-edit', {usuario});
    }, 
    create: (req,res) =>{
        //return res.send('Estoy el registro de usuarios');
        return res.render('register');
    },
    register: function(req, res) {
        let rectificar = req.body.rectificarPassword
        let contraseña = req.body.password
        
        if (contraseña == rectificar) {
            db.Usuario.create({
                nombre : req.body.nombre,
                apellido : req.body.apellido,
                fechaNacimiento : req.body.adn,
                email : req.body.email,
                password : bcrypjs.hashSync(req.body.password, 10)
            })
            .then(()=>{
                return res.redirect('/');
            })     
            .catch(error => console.log(error));
        }else{
           res.send('contraseñas no coinciden')
        }
    },
}
