<h1 align="center"> NodeJS </h1>

# **[NodeJS](https://nodejs.org/en/about/)**
### Como um tempo de execução JavaScript baseado em eventos assíncronos, o Node.js foi projetado para construir aplicativos de rede escalonáveis. No exemplo "hello world" a seguir, muitas conexões podem ser tratadas simultaneamente. A cada conexão, o callback é disparado, mas se não houver trabalho a ser feito, o Node.js entrará em hibernação.

<h1 align="center"> Docker </h1>

# **[Docker](https://www.docker.com/)**
### Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.
# **[Docker-Compose](https://docs.docker.com/compose/)**
### Compose é uma ferramenta para definir e executar aplicativos Docker de vários contêineres. Com o Compose, você usa um arquivo YAML para configurar os serviços do seu aplicativo. Então, com um único comando, você cria e inicia todos os serviços de sua configuração. Para saber mais sobre todos os recursos do Compose.

<h1 align="center"> MongoDB </h1>

# **[MongoDB](https://mongodb.com/)**
### MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.

# **[MongoDB Compass](https://docs.mongodb.com/compass/master/)**
### Como a GUI do MongoDB, o MongoDB Compass permite que você tome decisões mais inteligentes sobre a estrutura, consulta, indexação, validação de documentos e muito mais. As assinaturas comerciais incluem suporte técnico para MongoDB Compass.
# **[Mongo Express](https://github.com/mongo-express/mongo-express)**
### Interface de administração do MongoDB baseada em Web escrita com Node.js, Express e Bootstrap3.

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
* Após iniciar o servidor click nesse link -> ([Aplicação](http://localhost:3000))

## Insert de Dados

* Acesse a pasta /api/config/data/ para ter alguns exemplos de dados utilizados nos testes!

## Requisições

* Acesse a pasta /api/config/data/ la avera um arquivo chamado "Insomnia_data_api.json", este arquivo é a estrutura de requisições utilizada no Insomnia. Docs para [Importação e Exportação](https://support.insomnia.rest/article/172-importing-and-exporting-data) dos dados.