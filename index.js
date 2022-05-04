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

app.post("/", async function(req,res){
  var resultado = usuario.create(req.body)
  res.json(resultado);
});

app.put('/:id', async function(req, res) {
    const atualizar = await usuario.findByPk(req.params.id);
  atualizar.nome = req.body.nome
  const resultadoSave = await atualizar.save();
  res.json(resultadoSave)
  });

app.delete('/:id', async function(req, res) {
    const deletar = await usuario.findByPk(req.params.id);
    deletar.destroy();
  res.json(deletar)
});

app.listen(3000, function(req,res){
  console.log("O servirdo esta bruto demais");
});