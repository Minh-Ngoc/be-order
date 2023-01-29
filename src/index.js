
const express = require('express');
// const morgan = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors');

const serverless = require("serverless-http");

const route = require('./routes');
const db = require('./config/db');
const mongoose = require('mongoose');
const ServerApiVersion  = require('mongoose');

const app = express();

app.use(
    cors()
  );

// app.use(express);
// Connect to DB

// db.connect();
const URI = 'mongodb+srv://ngocminh:Minh1805701@cluster0.31wphgu.mongodb.net/?retryWrites=true&w=majority';

const connect = async (e) => {
    try {
        // const URI = 'mongodb://localhost:27017/BillManage';
        mongoose.connect(await URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1,
        });
        
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

connect();

// Curb Cores Error by adding a header here
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

// const port = process.env.PORT || 3001;

app.use(
    express.urlencoded({
        extended: false,
    }),
);

app.use(methodOverride('_method'));

route(app);

module.exports = app;

module.exports.handler = serverless(app);
