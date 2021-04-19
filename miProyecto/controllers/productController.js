const rescatados = require('../modulos/rescatados');
const perrosArray = rescatados.perros;
const gatosArray = rescatados.gatos;

module.exports = { 
   // index: function(req, res) {
   //     return res.render('product');
   // },

    id : (req, res)=> {
        let id = req.params.id

        for(let i = 0; i < perrosArray.length; i++){
            if(perrosArray[i].id == id){
                let perro = perrosArray[i]
                return res.render('product', {perro});
            } 
        }
    }
}


