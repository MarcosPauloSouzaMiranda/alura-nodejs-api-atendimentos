const Atendimento = require('../models/atendimentos');

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Atendimento.buscaPeloId(id, res);

    });

    app.post('/atendimentos', (req, res) => {

        var data = req.body;

        Atendimento.adiciona(data, res);
        
    });

    app.patch('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id);
        const data = req.body;

        Atendimento.altera(id, data, res);
    });

    app.delete('/atendimentos/:id', (req, res) => {
        
        const id = parseInt(req.params.id);

        Atendimento.apagar(id, res);
        
    });

}