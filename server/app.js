const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const userRoutes = require('./routes/user_routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});

//routes that handle request
app.use('/', userRoutes);


app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
  
  app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
});

app.listen(8000, () => {
    console.log('App listening at: 8000');
});