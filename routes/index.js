const express = require('express');
const router = express.Router();

const items = [];
var dataString = ''
var nodemailer = require("nodemailer");

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
    var transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'hooosg4xpc6ecqrd@ethereal.email',
            pass: 'MS2XjA8stfxHwYshAy'
        }
    });

    var mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>",
    }
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
