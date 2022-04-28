var express = require("express");
var app = express();
var {usuario} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function (req,res){
  var mostra = await usuario.findAll();
  res.json(mostra)
});

app.post("/", function(req,res){
  var resultado = usuario.create
  res.json(resultado);
});

app.listen(3000, function(req,res){
  console.log("O servirdo esta bruto demais");
});