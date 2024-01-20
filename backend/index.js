const express = require('express');
const bodyParser = require('body-parser');
const ports = process.env.PORT || 3000;

const proRoutes = require('./routes/products');

const errorController = require('./controllers/error');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use('/products', proRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(3000, () => console.log(`listening at ${ports}`));