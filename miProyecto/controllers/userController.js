const db = require('../database/models');
const bcrypjs = require('bcryptjs');
const op = db.Sequelize.Op;

module.exports = {

    index: (req, res)=>{
        let id = req.params.id;

        db.Usuario.findByPk(id, {
            include:[
                {association: 'rescatados'},
                {association: 'usuarios'}
            ]   
           })
       .then(usuario => {
           //console.log(usuario.rescatados.length)
            //return res.send(usuario.rescatados)
            //let rescatado = usuario.rescatados
            return res.render('profile', {usuario})
       })
    },
    
    edit: function(req, res) {

        let id = req.params.id

        db.Usuario.findByPk(id)
        .then( usuario=> {
            return res.render('profile-edit', {usuario});
        })

    },

    update: (req,res)=>{
        let id = req.body.id
        db.Usuario.update({
            //id default si no se completa
            nombre: req.body.nombre, 
            apellido: req.body.apellido,
            fechaNacimiento: req.body? req.body.fechaNacimiento: req.body.oldFecha,
            email: req.body.email,
            imagen: req.file? req.file.filename: req.body.oldImagen,
        },{
            where: {
                id: req.body.id,
            }
        })
        .then(resultados=>{
            db.Usuario.findByPk(id, {
                include:[
                    {association: 'rescatados'},
                    {association: 'usuarios'}
                ]   
               })
           .then(usuario => {
                //return res.send(usuario)
                let rescatado = usuario.rescatados
                return res.render('profile', {usuario, rescatado})
           })
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
                imagen: req.body.imagen,
                fechaNacimiento : req.body.adn,
                email : req.body.email,
                contraseña : bcrypjs.hashSync(req.body.password, 10)
            })
            .then(()=>{
                return res.redirect('/login');
            })     
            .catch(error => console.log(error));
        }else{
           return res.render('password-error')
        }
    },

    login: (req, res)=>{
        return res.render('login')
    }, 

    ingresar: function(req, res) {
        db.Usuario.findOne({
            where: [{ email : req.body.email }]
        })
        .then(usuario =>{
            if(usuario == null){
                return res.render('login-error')
            }else{
                if(bcrypjs.compareSync(req.body.password, usuario.contraseña)){
                    //Guardar al usuario que se está logueando
                    req.session.usuario = usuario;
                    if(req.body.recordarme){
                        res.cookie('usuarioId', usuario.id, {maxAge : 1000*60*60*24})
                    }
                    return res.redirect('/')
                }else{
                    return res.render('login-error');
                }
            }
        })
    },
    logout: function (req,res) {
        req.session.destroy();
        res.clearCookie('usuarioId');
        return res.redirect('/login');   
    }
}
