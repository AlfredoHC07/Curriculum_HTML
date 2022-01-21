const express = require('express');
const router = express.Router();

const items = [];
var dataString = ''

router.get('/', function(req, res, next) {
    res.render('curriculum', {
        items: items
    });

});

router.post('/', function(req, res, next) {
    function onSubmit(token) {
        document.getElementById("demo-form").submit();
        }
    // console.log(req.body.nombre);
    // res.render('curriculum', req.body);
    var d_ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    const {nombre, correo, comentario} = req.body;

    items.push({
        id: items.length + 1,
        name: nombre, correo, comentario,
        ip: d_ip,
    });
    console.log(items)
    res.redirect('/');
});



module.exports = router;
