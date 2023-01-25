
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

// db.connect();

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
        extended: true,
    }),
);
app.use(methodOverride('_method'));

router.get("/", (req, res) => {
    res.json({
      hello: "hi!"
    });
});
  
// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/index`, router);

// route(app);

// app.listen(port, () =>
//     console.log(`App listening at http://localhost:${port}`),
// );

module.exports = app;
module.exports.handler = serverless(app);
