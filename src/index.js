
const express = require('express');
// const morgan = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors');

const serverless = require("serverless-http");

const route = require('./routes');
const db = require('./config/db');

const app = express();

app.use(
    cors()
  );

// app.use(express);
// Connect to DB

db.connect();

// Curb Cores Error by adding a header here
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});


route(app);

module.exports = app;

module.exports.handler = serverless(app);
