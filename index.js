var express = require('express')
var app = express()
const Uwuifier = require('uwuifier');

const uwuifier = new Uwuifier();

app.get('/uwu', function (req, res) {
    var uwu = uwuifier.uwuifySentence(req.query.text)
    res.json({Text: uwu})
})

app.listen(3000)