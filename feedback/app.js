var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = 8081

app.engine('html', require('express-art-template'))
    .set('view option', { debug: process.env.NODE_ENV !== 'production' })
    .set('view engine', 'html')

var dataList = [
    {
        name: 'Jack',
        message: 'ppppppppppppppppp',
        time: '2020-01-02'
    },
    {
        name: 'Rose',
        message: 'oooooooooooooooooooooooo',
        time: '2010-01-02'
    },
    {
        name: 'Davce',
        message: 'oaskdojaspdjafasfas',
        time: '2033-01-02'
    },
    {
        name: 'jack',
        message: '今天窝们在家吃饭',
        time: '2020-01-02'
    },
    {
        name: 'jack',
        message: '我进爱你再加上',
        time: '2020-01-02'
    },
    {
        name: 'jack',
        message: 'ppppppppppppppppp',
        time: '2020-01-02'
    }
]

app
    .use('/public', express.static('./public/'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

app
    .get('/', function (req, res) {
        res.render('index.html', {
            dataList: dataList
        })
    })
    .get('/post', function (req, res) {
        res.render('post.html')
    })
    .get('/error', function (req, res) {
        res.render('error.html')
    })
    .post('/post', function (req, res) {
        var dataItem = req.body
        // dataItem.name = parseObj.searchParams.get('name');
        // dataItem.message = parseObj.searchParams.get('message');
        dataItem.time = '2020-02-20'
        dataList.unshift(dataItem)
        res.redirect('/')
    })

    .listen(port, function () {
        console.log('Server running at http://127.0.0.1:8081/');
    })
