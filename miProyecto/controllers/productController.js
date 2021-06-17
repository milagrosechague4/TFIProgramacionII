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
           clase: 1,
           descripcion: req.body.descripcion,
           imagen: req.file.filename,
       })
       .then(resultados=>{
        res.redirect ('/')
       })
    },

    edit : (req,res)=> {
        db.Rescatado.findByPk(req.params.id).then(resultado =>{
            return res.render('product-edit', {title : 'edit', producto: resultado})
        })
    },

    update : (req,res)=> {
        db.Rescatado.update({
            //id default si no se completa
            nombre: req.body.nombre, 
            fechaRescate: req.body.rescate,
            descripcion: req.body.descripcion,
            imagen: req.file.filename,
        },{
            where: {
                id: req.body.id,
            }
        })
        .then(resultados=>{
         res.redirect ('/product/'+req.body.id)
        })
    },

    destroy: (req,res)=>{
        db.Rescatado.destroy({
            where: [{
                id: req.body.id,
            }]
        })
        .then(()=>{
            return res.redirect('/')
        })
    }
    
    
    
}


