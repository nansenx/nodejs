var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router')
var port = 3000

app.engine('html', require('express-art-template'))

app.use('/node_modules/', express.static('./node_modules/'))
    .use('/public/', express.static('./public/'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(router)

app.listen(port, function () {
    console.log('running......');
})

module.exports = app