const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const ProductRoute = require('./routes/product')

app.use(ProductRoute);

sequelize.sync()
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err));