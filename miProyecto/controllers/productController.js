const rescatados = require('../modulos/rescatados');
const animalesArray = rescatados.animales;

const usuarios = require('../modulos/usuarios')
const usuariosArray = usuarios.index


module.exports = { 
   // index: function(req, res) {
   //     return res.render('product');
   // },

    show : (req, res)=> {
        let id = req.params.id;
        let rescatado;
        let usuario;

        for(let i = 0; i < usuariosArray.length; i++){
                usuario = usuariosArray[i]
        }

        
        for(let i = 0; i < animalesArray.length; i++){
            if(animalesArray[i].id == id){
                rescatado = animalesArray[i]
            } 
        }
       
        return res.render('product', {rescatado, usuario});
    },
    
    add : (req,res)=> {
        return res.render('product-add', {title : 'add'})
    },

    edit : (req,res)=> {
        return res.render('product-edit', {title : 'edit'})
    }
    
    
}


