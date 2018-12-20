const database = require('../databaseconnection');

//create models
require('../models/user_model');
require('../models/order_model');
require('../models/product_model');

//sync
database.sync({force: true}).then(() => database.close());
