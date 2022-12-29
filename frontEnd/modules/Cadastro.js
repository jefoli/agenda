import validator from "validator";

export default class Cadastro {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            //alert('Formulário não enviado');
            this.validate(e);
        });
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        console.log(emailInput.value, passwordInput.value);

        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            //push('E-mail inválido.');
            alert('E-mail inválido.');

            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            error = true;
            alert('A senha precisa ter entre 5 e 50 caracteres.');
        }

        if(!error) el.submit();
    }
}