const express = require('express');
const router =  express.Router();

const jwt = require('jsonwebtoken');

const User = require('../models/user_model');

router.post('/login', (req, res) => {
    User.findOne({
        where: {email: req.body.email}
    }).then((user) => {
        // check if user exists in database
        if(user === null) {
            return res.status(401).json({message: 'Authorization failed'})
        }
        if(user.password !== req.body.password) {
            return res.status(401).json({ message: 'Authorization failed'});
        } else {
            const token = jwt.sign({
                email: user.email,
                id: user.id
            },'MySuperDooperSecretKey', {expiresIn: '1h'});
            return res.status(200).json({ 
                message: 'Authorization successful',
                token: token
            });
        }
    }).catch((err) => {
        return res.status(401).json({ message: err});
    });
});

const Product = require('../models/product_model');

router.get('/products', (req, res) => {
    Product.findAll(
        //get all products
    ).then((data) => {
        return res.status(200).json({data});
    }).catch((err) => {
        return res.status(401).json({ message: err});
    });
});


module.exports = router;