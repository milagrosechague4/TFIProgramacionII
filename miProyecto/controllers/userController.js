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
                contraseña : bcrypjs.hashSync(req.body.password, 10)
            })
            .then(()=>{
                return res.redirect('/');
            })     
            .catch(error => console.log(error));
        }else{
           return res.render('password-error')
        }
    },
    login: function(req, res) {
        db.Usuario.findOne({
            where: [{ email : req.body.email }]
        })
        .then(usuario =>{
            //console.log(usuario+'-------------------');
            //return res.send(usuario.id);
            //console.log(usuario.id+'------------------------------');
            if(usuario == null){
                return res.send('Usuario o clave incorrecta')
            }else{
                if(bcrypjs.compareSync(req.body.password, usuario.contraseña)){
                    //Guardar al usuario que se está logueando
                    req.session.Usuario = usuario;
                    return res.redirect('/')
                }else{
                    return res.send('Usuario o clave incorrecta');
                }
            }
        })
    }
}
