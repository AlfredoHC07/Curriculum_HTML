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
    var d_ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    const {nombre, correo, comentario} = req.body;
    var datos = {nombre, correo, comentario};
    items.push({
        id: items.length + 1,
        name: nombre, correo, comentario,
        ip: d_ip,
    });
    var transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        auth: {
            user: 'pg2_test@arodu.xyz',
            pass: '123Qwerty'
        }
    });
    var mailOptions = {
        from: "pg2_test@arodu.xyz",
        to: "alfredo09hernandez@gmail.com",
        subject: "Contacto de Curriculum, Carlos Hernandez",
        text: `Nombre: ${nombre}, Correo: ${correo}, Comentario: ${comentario}`,
    }
    transporter.sendMail(mailOptions, (error, info) =>{
        if(error) {
            res.status(500).send(error.message);
        } else {
            console.log("Email Enviado")
            res.status(200).jsonp(req.body);
        }
    });
    res.redirect('/');
});



module.exports = router;
