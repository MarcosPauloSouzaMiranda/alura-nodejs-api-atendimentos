class Tabelas{
    
    init(conexao){
        
        this._conexao = conexao;
        
        console.log('Iniciando verificação de tabelas!');

        this.criarAtendimentos();
        
    }

    criarAtendimentos(){
        const sql = `
            CREATE TABLE IF NOT EXISTS Atendimentos(
                id int NOT NULL AUTO_INCREMENT,
                data DATETIME NOT NULL,
                cliente VARCHAR(50) NOT NULL,
                pet VARCHAR(20),
                servico VARCHAR(20) NOT NULL,
                status VARCHAR(20) NOT NULL,
                observacoes TEXT,
                dataCriacao DATETIME NOT NULL,
                PRIMARY KEY (id)
            );
        `;

        this._conexao.query(sql, (erro) => {
            
            if (erro){
                console.log(erro);
            } else {
                console.log('Tabelas atendimentos criadas com sucesso!');
            }
            
        })
    }

}

module.exports = new Tabelas;