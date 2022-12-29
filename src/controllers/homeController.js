const { async } = require('regenerator-runtime');

exports.index = async (req, res) => {
    res.render('index');
};
