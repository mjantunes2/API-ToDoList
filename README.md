<br />
<p align="center">

  <h3 align="center"><br>API ToDo List</b></h3>
 <br />
  <p align="center">
     Sumário
      <p align="center">
  <a href="#sobre"> Sobre </a> |
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a> |
  <a href="#tecnologias-utilizadas"> Tecnologias utilizadas </a>      
       <br />
    <br />
  </p>
</p>

# Sobre

O objetivo do projeto foi criar uma API para uma lista de afazeres, utilizando Node, Express, Sequelize e SQLite para implementa-la em um Front-end.

# Rotas de aplicação:

<b>[GET] </b> /atividade - A rota deve exibir todas as atividades listadas.<br>

<b>[GET] </b> /atividade/:id - A rota deve listar uma atividade baseada em seu ID.<br>

<b>[POST] </b> /atividade/create - A Rota deve criar uma atividade com as informações passas no corpo da requisição.<br>

```javascript
{
    "atividade": "Estudar Java",
    "descricao": "Estudar 2 horas diárias sobre essa linguagem",
    "feito": "feito"
}
```

<b>[PATCH] </b> /atividade/:id - A Rota deve atualizar uma atividade com as informações passadas no corpo da requisição. Caso necessário apenas uma informação pode ser atualizada por vez.<br>

```javascript
{
    "atividade": "Estudar TypeScript",
    "descricao": "Estudar 2 horas diárias sobre essa linguagem",
    "feito": "feito"
}
```

<br>[DELETE] </b> /atividade/:id - A Rota deve deletar uma atividade baseada em seu ID.<br>

# Rodando o projeto:

### Pré-requisitos:

Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Insomnia](https://insomnia.rest/download). <br> Além disso, é aconselhável ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código!

### Instalando e rodando o projeto:

```bash
# Clone este repositório
$ git clone https://github.com/mjantunes2/API-ToDoList

# Acesse a pasta do projeto no terminal
$ cd API-ToDoList

# Instale as dependências do projeto
$ npm install

# Inicie o servidor da aplicação
$ npm start

# Utilize o Insomnia para realizar as requisições nas rotas na URL:
http://localhost:3000/

# Para rodar os testes automatizados use os seguintes comandos:
$ npm test
```

### Dependências:

```javascript
"dependencies": {
    "dotenv-safe": "^8.2.0",
    "express": "^4.18.0",
    "sequelize": "^6.19.0",
    "sqlite3": "^5.0.6"
},
    "devDependencies": {
    "jest": "^28.0.2",
    "nodemon": "^2.0.15",
    "supertest": "^6.2.3"
}
```

# Tecnologias utilizadas: 
<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="https://raw.githubusercontent.com/brunoandreotti/biblioteca-backend/79c23c6a4bdd0bc6cb95463ee47741f2226cb0b1/readme/insomnia.svg" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a> <a href="https://jestjs.io/pt-BR/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="40" width="40" /></a>
</p>


**Desenvolvido por <a href="https://www.linkedin.com/in/murilo-antunes-bb1143228/"> Murilo Antunes e <a href="https://www.linkedin.com/in/lanaschimitez/"> Lana Eduarda Schimitez.**
