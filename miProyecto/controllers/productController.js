const db = require('../database/models');
const op = db.sequelize.Op
//const rescatados = require('../modulos/rescatados');
//const animalesArray = rescatados.animales;

//const usuarios = require('../modulos/usuarios')
//const usuariosArray = usuarios.index


module.exports = { 
   // index: function(req, res) {
   //     return res.render('product');
   // },

    show : (req, res)=> {
        let id = req.params.id;
       
        db.Rescatado.findByPk(id, {
             include:[
                 {all: true, nested: true}
                ]
            })
        .then(rescatado=> {
                return res.send (rescatado)
           
        })
        .catch(error => console.log(error))
    },

    productAdd : (req,res)=> {
        return res.render('product-add', {title : 'add'})
    },

    store : (req,res)=> {
       db.Rescatado.create({
           //id default si no se completa
           idUsuario: 1,
           nombre: req.body.nombre, 
           fechaRescate: req.body.rescate,
           clase: 1,
           descripcion: req.body.descripcion,
           imagen: req.file.filename,
       })
       .then(resultados=>{
        res.redirect ('/')
       })
    },

    edit : (req,res)=> {
        return res.render('product-edit', {title : 'edit'})
    },
    
    
    
}


