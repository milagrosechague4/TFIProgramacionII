const rescatados = require('../modulos/rescatados');
const animalesArray = rescatados.animales;


module.exports = { 
   // index: function(req, res) {
   //     return res.render('product');
   // },

    show : (req, res)=> {
        let id = req.params.id;
        let rescatado;
       
        
        for(let i = 0; i < animalesArray.length; i++){
            if(animalesArray[i].id == id){
                rescatado = animalesArray[i]
            } 
        }
       
        return res.render('product', {rescatado});
    }
}


