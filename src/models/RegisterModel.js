const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true }, 
    password: { type: String, required: true }, 
});

const RegisterModel = mongoose.model('Register', LoginSchema);

class Register {
    constructor(body){
        this.body = body;
        //Controla se o usuário pode ou não ser criado na BD
        this.errors = []; 
        this.user = null;
    }

    async register(){
        this.valida();
        if(this.errors.length > 0) return;
        
        await this.userExists();
        
        const salt = bcryptjs.genSaltSync(); //está gerando um salt
        this.body.password = bcryptjs.hashSync(this.body.password, salt); // P/ fazer o hash da senha

        this.user = await RegisterModel.create(this.body);

    }

    async userExists() {
       this.user = await RegisterModel.findOne({email: this.body.email });
       if(this.user) this.errors.push('Usuário já existe.');
    }

    valida() {
        this.cleanUp();
        //validação:
        //Instalado pacote Validator para checar
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');

        if(this.body.password.length < 5 || this.body.password.length > 50) {
            this.errors.push ('A senha precisa ter entre 5 e 50 caracteres.')
        }
    }

    //Vai garantir que tudo que esteja dentro do body é uma str:
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] ==! 'string'){
                this.body[key] = ''; //converte para str vazia.
            }
        }
    
        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Register;