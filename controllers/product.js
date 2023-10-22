const path = require('path');
const Product = require('../models/product');

exports.getHomePage = (req,res,next)=>{
    res.sendFile(path.join(__dirname, "../", "public", "views", "index.html"))
}

exports.addProduct = (req,res,next)=>{
    const name = req.body.name;
    const description = req.body.desc;
    const price = req.body.price;
    const quantity = req.body.qty;

    Product.create({
        name:name,
        description:description,
        price:price,
        Quantity:quantity
    })
    .then(result=>{
        console.log('Product added');
        res.redirect('/');
    })
    .catch((err)=>console.log(err));
}

exports.getProducts = (req,res,next)=>{
    Product.findAll()
    .then(products=>{
        res.json(products);
    })
    .catch(err=>console.log(err));
}

exports.updateProduct = (req,res,next)=>{
    const productId = req.params.id;
    console.log(productId);
    console.log(req.body);
    const quantity = req.body.qty;
    Product.update({
        Quantity : quantity
    },
        {where : 
            {
                id:productId
            }
        }
    )
    .then((result)=>{
        res.redirect('/');
    })
    .catch(err=>console.log(err));
}

exports.deleteProduct = (req,res,next)=>{
    const productId = req.params.id;
    Product.findByPk(productId)
    .then((product)=>{
        return product.destroy()
    })
    .then((result)=>{
        console.log('deleted')
        res.redirect('/');
    })
    .catch((err)=>console.log(err));
}
