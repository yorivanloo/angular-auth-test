var express = require('express'),
    faker = require('faker'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    jwtSecret = 'jhskjdf5464mhsdh/6uk',
    app = express(),
    expressJwt = require('express-jwt'),
    fs = require("fs");

// Allows cross-origin-resource-sharing
app.use(cors());

app.use(bodyParser.json());

// controllers
app.use(require('./controllers/tasks.controller'));
app.use(require('./controllers/authentication.controller'));

// expressJwt under the cover intercepts all the request that comes in, takes the authorization header with the Bearer and the token, decode that token using jwtSecret, if it does decode properly, and the signature is verified, it adds user to the request object, and the user property will simply be the decoded JSON object.
app.use(expressJwt({
    secret: jwtSecret
}).unless({
    path: ['/login']
}));
// When the user is logging in, obviously he won't have the token, so we need to add unless on this middleware, and the path in this array.

app.listen(8080, function () {
    console.log('App listening on localhost:8080');
});
