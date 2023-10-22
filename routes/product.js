const express = require('express');

const router = express.Router();

const expressController = require('../controllers/product');

router.use(express.static("public"));

router.get('/',expressController.getHomePage);

router.get('/getProducts',expressController.getProducts);

router.post('/addProduct',expressController.addProduct);

router.put('/updateProduct/:id',expressController.updateProduct);

module.exports = router;
