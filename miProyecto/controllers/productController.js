const db = require('../database/models');
const op = db.sequelize.Op

module.exports = { 

    show : (req, res)=> {
        let id = req.params.id;
       
        db.Rescatado.findByPk(id, {
             include:[
                {association: 'comentarios', include: {association: 'usuario'}
                }]   
            })
        .then(rescatado=> {

            let comentarios = rescatado.comentarios
            return res.render('product', {rescatado, comentarios})
            
        })
        .catch(error => console.log(error))
    },

    coment: (req, res)=>{
        db.Comentario.create({
            usuarioId: req.body.usuarioId,
            texto: req.body.texto,
            fechaCreacion: 00-00-00,
            productId: req.body.productId,
        })
        .then(resultado=>{
            let id = req.body.productId;
       
            db.Rescatado.findByPk(id, {
             include:[
                {association: 'comentarios', include: {association: 'usuario'}
                }]   
            })
            .then(rescatado=> {

                let comentarios = rescatado.comentarios
                return res.render('product', {rescatado, comentarios}) 
            })
            .catch(error => console.log(error))
        })
    },

    create : (req,res)=> {
        return res.render('product-add')
    },

    store : (req,res)=> {
       db.Rescatado.create({
           //id default si no se completa
           usuarioId: req.body.usuarioId,
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
        db.Rescatado.findByPk(req.params.id).then(resultado =>{
            return res.render('product-edit', {title : 'edit', producto: resultado})
        })
    },

    update : (req,res)=> {
        db.Rescatado.update({
            //id default si no se completa
            usuarioId: req.body.usuarioId,
            imagen: req.file.filename,
            nombre: req.body.nombre, 
            fechaRescate: req.body.rescate,
            descripcion: req.body.descripcion,
            
        },{
            where: {
                id: req.body.id,
            }
        })
        .then(resultados=>{
         res.redirect ('/'+ req.body.id)
        })
    },

    delete: (req, res)=>{
        let id = req.params.id;
        db.Rescatado.findByPk(id)
        .then(rescatado =>{
            return res.render('rescatado-delete',{rescatado})
        })
        .catch(error => console.log(error))
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


