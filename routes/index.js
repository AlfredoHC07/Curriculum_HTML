const express = require('express');
const router = express.Router();

const items = [];

router.get('/', (req, res) =>{
    res.render('curriculum', {
       title: 'Proyecto Curriculum 2.0',
       items: items
    })
});

router.post('/contactos', (req, res, next) => {
    const { newItem } = req.body;
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect('/contactos');
});

module.exports = router;
