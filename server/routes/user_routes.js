const express = require('express');
const router =  express.Router();

const jwt = require('jsonwebtoken');

const User = require('../models/user_model');
const Product = require('../models/product_model');
const Order = require('../models/order_model');

const checkAuth = require('./middleware');

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

router.get('/products', (req, res) => {
    Product.findAll(
        //get all products
    ).then((data) => {
        return res.status(200).json({data});
    }).catch((err) => {
        return res.status(401).json({ message: err});
    });
});

//route that uses middleware need to send userId in the body
router.post('/orders', checkAuth, (req, res) => {
    const userEmail = req.body.userId;
    Order.findAll({where: {userId: userEmail}}).then((data) =>{
        if(data) {
            return res.status(200).json({message: data});
        }
        else{
            return res.status(200).json({message: "User Doesnt have any orders!"});
        }
    }).catch((err) => {
        return res.status(401).json({ message: err});
    });

})
module.exports = router;