const rescatados = require('../modulos/rescatados');
const perrosArray = rescatados.perros;
const gatosArray = rescatados.gatos;

module.exports = { 
   // index: function(req, res) {
   //     return res.render('product');
   // },

    show : (req, res)=> {
        let id = req.params.id;
        let perro;
        
        for(let i = 0; i < perrosArray.length; i++){
            if(perrosArray[i].id == id){
                perro = perrosArray[i]
            } 
        }
        return res.render('product', {perro});
    }
}


