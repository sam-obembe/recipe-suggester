var express = require("express")
var bodyParser = require("body-parser")
var con = require('./controllers/controller.js')
var app = express()
var port = 5001

app.use(bodyParser.json())

app.get("/api/recipes",con.retrieve);

app.listen(port,()=>console.log(`listening on ${port}`))

