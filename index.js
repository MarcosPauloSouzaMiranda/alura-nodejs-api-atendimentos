const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

const app = customExpress();



conexao.connect((erro => {
    if (erro){
        console.log('Erro de conexão com o banco de dados!', erro);
    } else {

        Tabelas.init(conexao);
        
        console.log('Banco de dados conectado com sucesso!');

        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000!");
        });
        
    }
}));


