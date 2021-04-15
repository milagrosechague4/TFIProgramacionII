let controller = {
    index: function(req, res) {
        return res.render('index', { title: 'Express' });
    }
}

module.exports = controller;
