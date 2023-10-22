const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define("products",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description : Sequelize.STRING,
    price: Sequelize.DOUBLE,
    Quantity:Sequelize.INTEGER
});

module.exports = Product;
