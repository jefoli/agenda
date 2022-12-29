const { async } = require('regenerator-runtime');
const Register = require('../models/RegisterModel');

exports.contato = (req, res) => {
    if(req.session.user) return res.render('login-logado');
    res.render('cadastro');
}

exports.register = async function (req, res) {
    try{
        const login = new Register(req.body);
        await login.register();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function (){
                return res.redirect('/cadastro');
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso');
        req.session.save(function (){
            return res.redirect('/log');
        });
        
    }catch(e) {
        console.log(e);
        res.render('404');   
    };
};