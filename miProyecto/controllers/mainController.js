const db = require('../database/models')
const Op = db.Sequelize.Op

let controller = {
    index: function(req, res) {
        
        db.Rescatado.findAll()
        .then(respuesta =>{
           
            let perroArray = [];
            let gatoArray = [];

            respuesta.forEach(element =>{
                if (element.clase == 0){
                    perroArray.push(element)
                } else {
                    gatoArray.push(element)
                }
            })
            //return res.send(respuesta)
            return res.render('index', {perroArray, gatoArray} )
        })
        .catch(error => console.log(error))
    },

    create: function(req, res){
        return res.render('register', {title: 'Registrarse'})
    },

    show: function(req, res) {
        return res.render('login', { title: 'Iniciar Secion' });
    },
    
    search: function(req, res) {

            let buscar = req.query.search;
            //return res.send(buscar);
            //Aquí me dispongo a realizar mi tarea
            if(buscar === ''){
                db.Rescatado.findAll()
                .then(respuesta =>{
                    let perroArray = [];
                    let gatoArray = [];

                    respuesta.forEach(element =>{
                        if (element.clase == 0){
                             perroArray.push(element)
                    } else {
                        gatoArray.push(element)
                    }
                    })
                    return res.render('index', {perroArray, gatoArray})
                })
                .catch(error => console.log(error))
            }else{
                db.Rescatado.findAll({
                    where: 
                        {
                            [Op.or]: [
                                {nombre : {[Op.like]: `%${buscar}%`}},
                                {descripcion: {[Op.like]: `%${buscar}%`}}
                            ] 
                        }
                    })
                .then(respuesta =>{
                    return res.render('search-results', {respuesta})
                })
                .catch(error => console.log(error))
            }
    
        },
}

module.exports = controller;