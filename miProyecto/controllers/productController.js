const db = require('../database/models');
const op = db.sequelize.Op

module.exports = { 
   // index: function(req, res) {
   //     return res.render('product');
   // },

    show : (req, res)=> {
        let id = req.params.id;
       
        db.Rescatado.findByPk(id, {
             include:[
                 {association: 'comentarios', include: {association: 'usuarios'}
                 }]   
            })
        .then(rescatado=> {

            let comentarios = rescatado.comentarios

            return res.render('product', {rescatado, comentarios})
        })
        .catch(error => console.log(error))
    },

    create : (req,res)=> {
        return res.render('product-add', {title : 'add'})
    },

    store : (req,res)=> {
       db.Rescatado.create({
           //id default si no se completa
           usuarioId: 1,
           nombre: req.body.nombre, 
           fechaRescate: req.body.rescate,
           clase: req.body.clase,
           descripcion: req.body.descripcion,
           imagen: req.file.filename,
       })
       .then(resultados=>{
        res.redirect ('/')
       })
    },

    edit : (req,res)=> {
        let rescatadoId = req.params.id

        db.Rescatado.findByPk(rescatadoId)
        .then(rescatado =>{
           // return res.send(rescatado.imagen)
            let rescatadoGuardar= {
                nombre: req.body.nombre, 
                fechaRescate: req.body.rescate,
                imagen: '',
                descripcion: req.body.descripcion,
            }
            
            if(req.file == undefined){
                rescatadoGuardar.imagen = rescatado.imagen 
            }else{
                rescatadoGuardar.imagen = req.file.filename
            }

            db.Rescatado.update(rescatadoGuardar,    
            {
                where: {
                    id:  rescatadoId
                }
            })
            .then(resultado=>{
                return res.redirect('product')
            })
            .catch(error=> {console.log(error)})
        }) 
    },
    
    
    
}


