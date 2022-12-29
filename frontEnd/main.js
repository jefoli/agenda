//arquivo de entrada do front-end

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

//instanciar Class:
import Login from './modules/Login';
import Cadastro from './modules/Cadastro';
import Contato from './modules/Contato';



const cadastro = new Cadastro('.form-cadastro');
const login = new Login('.form-login');
const contato = new Contato('.form-contato');


login.init();
cadastro.init();
contato.init();