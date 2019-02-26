const express = require('express');

const store = express.Router();

store.get('/', (req, res) => {
    res.status(200).json({
        company: 'React Commerce',
        telephone: '+55 0000-0000',
        email: 'contact@exemple.com',
    });
});

module.exports = store;
