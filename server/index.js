const express = require('express');
const path = require('path');

const port = 3900;
const app = express();

const store = require('./routes/store');
const products = require('./routes/products');

app.use('/store', store);
app.use('/products', products);

app.use('/public', express.static(path.join(__dirname, './public')));

app.listen(port, () => {
    console.log('Server running!');
});
