var express = require("express")
var bodyParser = require("body-parser")
var con = require('./controllers/controller.js')
var app = express()
var port = 3001
const {retrieve} = require("./controllers/controller");
app.use(bodyParser.json())

app.get("/api/recipes", retrieve);
app.post("/api/recipes/save",con.save);
app.get("/api/recipes/saved",con.getSaved)
//app.post("/api/recipes/save", con.adding)
app.delete("/api/recipes/remove/:id", con.remove)

app.listen(port,()=>console.log(`listening on ${port}`))

