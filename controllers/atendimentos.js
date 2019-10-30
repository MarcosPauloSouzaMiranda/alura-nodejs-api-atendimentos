module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        res.send('<h1>Servidor Online!</h1>');
    });

}