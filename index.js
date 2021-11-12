var express = require('express')
var app = express()
const Uwuifier = require('uwuifier');

const uwuifier = new Uwuifier();

app.get('/', function (req, res) {
    res.send("only /uwu for now. Use /uwu?text=xxx to get uwufied text")
})

app.get('/uwu', function (req, res) {
    var uwu = uwuifier.uwuifySentence(req.query.text)
    res.json({Text: uwu})
})

app.listen(3000)