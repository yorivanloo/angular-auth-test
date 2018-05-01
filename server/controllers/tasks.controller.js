var express = require('express'),
    router = express.Router(),
    fs = require("fs");

// routes
router.get('/tasks', getAll);
router.post('/add/task', add);
router.post('/delete', _delete);
router.post('/update', update);

module.exports = router;

function getAll(req, res) {
    var tasks = require("../data/tasks.json");
    res.send(tasks.items);
}

function add(req, res) {
    var tasks = require("../data/tasks.json");

    tasks.items.push(req.body);

    fs.writeFileSync("data/tasks.json", JSON.stringify(tasks), "utf8");

    res.send(tasks.items);
}

function _delete(req, res) {
    var tasks = require("../data/tasks.json");

    tasks.items.splice(req.body.index, 1);

    fs.writeFileSync("data/tasks.json", JSON.stringify(tasks), "utf8");

    res.send(tasks.items);
}

function update(req, res) {
    var tasks = require("../data/tasks.json");

    tasks.items[req.body.index].completed = req.body.completed;

    fs.writeFileSync("data/tasks.json", JSON.stringify(tasks), "utf8");

    res.send(tasks.items);
}
