const database = require('../databaseconnection');

//create models
require('../user/user_model');
require('../user/order_model');
require('../user/product_model');

//sync
database.sync({force: true}).then(()=>database.close());
