const db = require('../database/models');
const op = db.sequelize.Op

module.exports = { 

    show : (req, res)=> {
        let id = req.params.id;
       
        db.Rescatado.findByPk(id, {
             include:[
                {association: 'comentarios', include: {association: 'usuario'}},
                {association: 'producto'}]   
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
            productId: req.body.productId,
            texto: req.body.texto,
            //createdAt:'',
            
        })
        .then(resultado=>{
            let id = req.body.productId;
       
            db.Rescatado.findByPk(id, {
             include:[
                {association: 'comentarios', include: {association: 'usuario'}},
                {association: 'producto'}]   
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
        db.Rescatado.findByPk(req.params.id)
        .then(resultado =>{
            return res.render('product-edit', {producto: resultado})
        })
    },

    update : (req,res)=> {
    
        let id = req.body.id

        db.Rescatado.update({
            //id default si no se completa
            usuarioId: req.body.usuarioId,
            imagen: req.file? req.file.filename: req.body.oldImagen,
            nombre: req.body.nombre, 
            fechaRescate: req.body.rescate,
            descripcion: req.body.descripcion,
        },{
            where: {
                id: req.body.id,
            }
        })
        .then(resultados=>{
            db.Rescatado.findByPk(id, {
                include:[
                   {association: 'comentarios', include: {association: 'usuario'}},
                   {association: 'producto'}]   
               })
               .then(rescatado=> {
   
                   let comentarios = rescatado.comentarios
                   return res.render('product', {rescatado, comentarios}) 
               })
               .catch(error => console.log(error))
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


