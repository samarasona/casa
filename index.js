var express = require("express");
var app = express();
var { usuario, empresa } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", async function(req,res){
    var usuarios = await usuario.findAll();
    res.json(usuarios)
});

app.post('/usuarios', async function(req,res) {
  var resultado = await usuario.create(req.body);
  res.json(resultado)
}) ;

app.get("/empresas/:id/usuarios", async function(req, res){
  let resultado = await empresas.findByPk(req.params.id,{
    include:"usuarios"
  })
  res.json(resultado.usuario);
})
app.get("/usuarios/:id/empresas", async function(req, res){
  let resultado = await usuario.findByPk(req.params.id,{
    include:"empresa"
  })
  res.json(resultado.empresa);
})


app.put('/usuarios/:id', async function(req,res) {
  var resultado = await usuario.update(
    {
      nome: req.body.nome,
    },
    {
      where:{
        id: req.params.id,
      },
    }
  )
  res.json(resultado);
}) ;

app.delete('/usuarios/:id', async function(req,res) {
var resultado = await usuario.destroy(
    {
      where:{
        id: req.params.id,
      },
  });
  res.json(resultado);
}) ;

app.get("/usuarios/:id", async function(req,res){
    var retorna = await usuario.findByPk(req.params.id);
res.json(retorna)
});



app.get("/empresas", async function(req,res){
    var empresas = await empresa.findAll();
    res.json(empresas)
});

app.post('/empresas', async function(req,res) {
  var resultado = await empresa.create(req.body);
  res.json(resultado)
}) ;

app.put('/empresas/:id', async function(req,res) {
  var resultado = await empresa.update(
    {
      nome: req.body.nome,
    },
    {
      where:{
        id: req.params.id,
      },
    }
  )
  res.json(resultado);
}) ;

app.delete('/empresas/:id', async function(req,res) {
var resultado = await empresa.destroy(
    {
      where:{
        id: req.params.id,
      },
  });
  res.json(resultado);
}) ;

app.get("/empresas/:id", async function(req,res){
    var retorna = await empresa.findByPk(req.params.id);
res.json(retorna)
});

app.listen(3000, function(){
  console.log("O servidor funcionou!");
});

