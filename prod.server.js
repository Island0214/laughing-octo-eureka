var express = require('express')
var config = require('./config/index')

var port = process.env.PORT || config.build.port

var app= express()

var router = express.Router()

router.get('/',function (req, res, next) {
  req.url = '/index.html'
  next()
})

app.use(router)

//异步接口
var seller=require('./src/data/data.json')
var apiRoutes = express.Router()
apiRoutes.get('/seller',function (req,res) {
  res.json({
    data:seller
  })
})


