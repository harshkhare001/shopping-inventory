const express = require('express');

const router = express.Router();

const expressController = require('../controllers/product');

router.use(express.static("public"));

router.get('/',expressController.getHomePage);

router.get('/getProducts',expressController.getProducts);

router.post('/addProduct',expressController.addProduct);

router.post('/updateProduct/:id',expressController.updateProduct);

router.get('/deleteProduct/:id',expressController.deleteProduct);

module.exports = router;
