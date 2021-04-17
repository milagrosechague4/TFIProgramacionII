let controller = {
    index: function(req, res) {
        return res.render('index', { title: 'Express' });
    },

    register: function(req, res){
        return res.render('register', {title: 'hola'})
    }
}

module.exports = controller;
