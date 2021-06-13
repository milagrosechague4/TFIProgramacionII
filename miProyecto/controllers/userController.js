const db = require('../database/models');
const bcrypjs = require('bcryptjs');
const op = db.Sequelize.Op;

module.exports = {

    index: (req, res)=>{
        let id = req.params.id;

        db.Usuario.findByPk(id, {
            include:[
                {association: 'rescatados'}
            ]   
           })
       .then(usuario => {
            let rescatado = usuario.rescatados
            return res.render('profile', {usuario, rescatado})
       })
    },

    update: function(req, res) {

        let id = req.params.id

        db.Usuario.findByPk(id)
        .then( usuario=> {

            return res.render('profile-edit', {usuario});
        })

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
