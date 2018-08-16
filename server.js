const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const Middleware = require('./middleware/default');
const Router = require('./routes/default-router');

const realPrice = require('./heavy-lifting/api');


const app = express();

const PORT = process.env.PORT || 3000;


/**
 * Data
 */

mydata = require('./mydata');


/**
 * Logging
 */

app.use(logger('dev'));


/**
 * Body parser
 */

app.use(bodyParser.json());


/**
 * Middleware
 */

app.use(Middleware);


/**
 * Routes
 */

app.use(Router);


/**
 * Monitor price and trigger alarm
 */

setInterval(realPrice, 60000);


/**
 * Listen
 */

app.listen(PORT, () => {
    console.log("[+] Server is listening on port " + PORT);
});
