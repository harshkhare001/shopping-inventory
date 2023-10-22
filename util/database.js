const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopping-admin', 'root', 'hulk@123', {dialect:'mysql', host:'localhost'});

module.exports = sequelize;
