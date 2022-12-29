const express = require('express');
const route = express.Router(); 
const homeController = require('./src/controllers/homeController'); 
const loginController = require('./src/controllers/loginController'); 
const contatoController = require('./src/controllers/contatoController'); 
const agendaController = require('./src/controllers/agendaController')
const { loginRequired } = require('./src/middlewares/middlewares');
const registerController = require('./src/controllers/registerController');


//Rotas da home
route.get('/', homeController.index);
route.get('/cadastro', registerController.contato);
route.get('/agenda', loginRequired, agendaController.index);


//Rotas de login
route.get('/log', loginController.index);
route.post('/register', registerController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);


//Rotas de contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/agenda/delete/:id', loginRequired, contatoController.delete);


module.exports = route;

