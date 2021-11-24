const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index', {
       title: 'Proyecto Curriculum 2.0'
    })
});

router.get('/curriculum', (req, res, next) => {
    res.render('curriculum', {
        title: 'Curriculum 2.0'
    })
});

module.exports = router;
