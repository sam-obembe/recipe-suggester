var express = require("express")
var bodyParser = require("body-parser")
var con = require('./controllers/controller.js')
var app = express()
var port = 3001
//const {retrieve} = require("./controllers/controller");
app.use(bodyParser.json())

app.get("/api/recipes", con.retrieve);
app.get("/api/shoppingList", con.getShoppingList);
app.post("/api/recipes/save",con.save);
app.post("/api/shoppingList/add", con.addToShoppingList);
app.get("/api/recipes/saved",con.getSaved);
//app.post("/api/recipes/save", con.adding)
app.delete("/api/recipes/remove/:id", con.remove)
app.delete("/api/shoppingList/remove/:item", con.removeFromShopping)


//app.put
app.put("/api/shoppingList/edit/:incoming", con.listEdit)
app.listen(port,()=>console.log(`listening on ${port}`))

