import validator from "validator";

export default class Contato {
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
        const nomeInput = el.querySelector('input[name="nome"]');
        const telelefoneInput = el.querySelector('input[name="telefone"]');
        const emailInput = el.querySelector('input[name="email"]');

        //console.log(nomeInput.value, sobrenomeInput.value,telelefoneInput.value, emailInput.value);

        let error = false;

        if(nomeInput.value.length < 3 || nomeInput.value.length > 50) {
            alert('O nome precisa ter entre 3 a 5 letras');
            error = true;
        }

        if(!(emailInput.value.length < 3) || !(telelefoneInput.value.length < 8)) {
            error = true;
            alert('Você precisa preencher o e-mail ou telefone.');
        }

        if(!error) el.submit();
    }
}