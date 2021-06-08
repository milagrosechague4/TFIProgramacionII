const db = require('../database/models');
//const rescatados = require('../modulos/rescatados');
//const animalesArray = rescatados.animales;

const usuarios = require('../modulos/usuarios')
const usuariosArray = usuarios.index


module.exports = { 
   // index: function(req, res) {
   //     return res.render('product');
   // },

    show : (req, res)=> {
        let id = req.params.id;
       
        db.Rescatado.findByPk(id)
        .then(rescatado=> {

            let usuario 

            for(let i = 0; i < usuariosArray.length; i++){
                usuario = usuariosArray[i]
            }
            return res.render('product', {rescatado, usuariosArray});
        })
       
        //let rescatado;
        
        //for(let i = 0; i < animalesArray.length; i++){
        //    if(animalesArray[i].id == id){
        //        rescatado = animalesArray[i]
        //    } 
        //}
       
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


