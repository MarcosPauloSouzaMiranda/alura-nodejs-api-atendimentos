const Atendimento = require('../models/atendimentos');

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        res.send('<h1>Servidor Online!</h1>');
    });

    app.post('/atendimentos', (req, res) => {

        var data = req.body;

        Atendimento.adiciona(data, res);
        
    });

}