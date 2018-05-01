var express = require('express'),
    router = express.Router(),
    fs = require("fs"),
    jwt = require('jsonwebtoken'),
    jwtSecret = 'jhskjdf5464mhsdh/6uk',
    user = require("../data/user.json");

// responds to post request made by cliet when path in url is /login
router.post('/login', authenticate, function (req, res) {
    var token = jwt.sign({
        username: user.username // constructs pyload, having username key, value pair.
    }, jwtSecret);
    res.send({
        token: token,
        user: user // just for simplicity sake, it sends the user back to client to be recognized by the developer.
    });
});

module.exports = router;

// UTIL FUNCTIONS
function authenticate(req, res, next) {
    var body = req.body;
    if (!body.username || !body.password) {
        res.status(404).end('Must provide username or password');
    }
    if (body.username !== user.username || body.password !== user.password) {
        res.status(401).end('Incorrect username or password');
    }
    next();
}
