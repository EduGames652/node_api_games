<h1 align="center"> NodeJS </h1>

# **[NodeJS](https://nodejs.org/en/about/)**
### Como um tempo de execução JavaScript baseado em eventos assíncronos, o Node.js foi projetado para construir aplicativos de rede escalonáveis. No exemplo "hello world" a seguir, muitas conexões podem ser tratadas simultaneamente. A cada conexão, o callback é disparado, mas se não houver trabalho a ser feito, o Node.js entrará em hibernação.

<h1 align="center"> Insomnia </h1>

# **[Insomnia](https://insomnia.rest/)**
### O cliente REST API de plataforma cruzada mais intuitivo . Insomnia é um cliente REST API poderoso com gerenciamento de cookies, variáveis ​​de ambiente, geração de código e autenticação para Mac, Window e Linux.

<h1 align="center"> Instalação </h1>

## Instalar Dependências
```
npm install
```
## Instalar o Nodemon Globalmente na Maquina
```
npm install -g nodemon
```
## Configuração do .ENV
* Copie o arquivo .evn.tpl
* Renomeie o Arquibo .env.tpl copy para .env
* No arquivo havera duas variavies
  * PORT
  * DB_URL
* A variavel PORT é a porta em que nossa aplicação roda
* A variavel DB_URL é a conexão do nosso banco de dados (MongoDB)
  * mongodb://localhost:27017/database_nome

## Iniciar o Servidor
```
nodemon
```
* Após iniciar o servidor click nesse link => ([Aplicação](http://localhost:3000))
