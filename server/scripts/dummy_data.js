const database = require('../databaseconnection');


const User = require('../models/user_model');
const Order = require('../models/order_model');
const Product = require('../models/product_model');
const OrderProduct = require('../models/orderProduct_model');


const types= ['Processor', 'Graphics Card', 'Ram'];
const cost= [1500,2000,3000,3500,4500,5000];

// Product.bulkCreate([
//     {
//         type: types[0],
//         name: 'Ryzen 5',
//         cost: cost[0]
//     },
//     {
//         type: types[0],
//         name: 'Intel i7',
//         cost: cost[2]
//     },
//     {
//         type: types[1],
//         name: 'RX 580',
//         cost: cost[1]
//     },
//     {
//         type: types[1],
//         name: 'Nvidia 1080',
//         cost: cost[5]
//     },
//     {
//         type: types[2],
//         name: 'DDR4 16GB',
//         cost: cost[0]
//     },
//     {
//         type: types[2],
//         name: 'DDR4 32GB',
//         cost: cost[2]
//     }
// ]);

// User.bulkCreate([
//     {
//         name: 'Lucija Vlasteli',
//         email: 'lvlast00@fesb.hr',
//         password: 'sifra1950'
//     },
//     {
//         name: 'Niksa Orlandic',
//         email: 'norland@pmfst.hr',
//         password: 'sifra1950'
//     },
// ]);
// Order.bulkCreate([
//     {
//         userId: 1,
//         cost: null
//     },
//     {
//         userId: 2,
//         cost: null
//     }
// ]);

// OrderProduct.bulkCreate([
//     {
//         number: 1,
//         productId: 1,
//         orderId: 1
//     },
//     {
//         number: 1,
//         productId: 3,
//         orderId: 1
//     },
//     {
//         number: 1,
//         productId: 2,
//         orderId: 2
//     },
//     {
//         number: 1,
//         productId: 4,
//         orderId: 2
//     }
// ]);

Promise.all([
    Product.bulkCreate([
        {
            type: types[0],
            name: 'Ryzen 5',
            cost: cost[0]
        },
        {
            type: types[0],
            name: 'Intel i7',
            cost: cost[2]
        },
        {
            type: types[1],
            name: 'RX 580',
            cost: cost[1]
        },
        {
            type: types[1],
            name: 'Nvidia 1080',
            cost: cost[5]
        },
        {
            type: types[2],
            name: 'DDR4 16GB',
            cost: cost[0]
        },
        {
            type: types[2],
            name: 'DDR4 32GB',
            cost: cost[2]
        }
    ]),
    
    User.bulkCreate([
        {
            name: 'Lucija Vlasteli',
            email: 'lvlast00@fesb.hr',
            password: 'sifra1950'
        },
        {
            name: 'Niksa Orlandic',
            email: 'norland@pmfst.hr',
            password: 'sifra1950'
        },
    ]),

    Order.bulkCreate([
        {
            userId: 1,
            cost: null
        },
        {
            userId: 2,
            cost: null
        }
    ]),
    
    OrderProduct.bulkCreate([
        {
            number: 1,
            productId: 1,
            orderId: 1
        },
        {
            number: 1,
            productId: 3,
            orderId: 1
        },
        {
            number: 1,
            productId: 2,
            orderId: 2
        },
        {
            number: 1,
            productId: 4,
            orderId: 2
        }
    ])
]).then(() => {
    database.close();
})