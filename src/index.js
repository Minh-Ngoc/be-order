require('dotenv').config({path: __dirname + '/.env' })

const path = require('path');
const express = require('express');
// const morgan = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors');

const route = require('./routes');
const db = require('./config/db');

const serverless = require("serverless-http");

const router = express.Router();

const app = express();

app.use(
    cors()
  );

app.use(express);
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

const port = process.env.PORT || 3001;

// Use static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'));

// Template engine

// Routes init
// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
    res.json({
      hello: "hi!"
    });
});
  
// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/index`, router);

route(app);

// app.listen(port, () =>
//     console.log(`App listening at http://localhost:${port}`),
// );

module.exports = app;
module.exports.handler = serverless(app);
