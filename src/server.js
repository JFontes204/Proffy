const proffys = [];
const path = require('path');

function pageLanding(request, response) {
  return response.render('index.html');
}
function pageStudy(request, response) {
  return response.render('study.html');
}
function pageGiveClasses(request, response) {
  return response.render('give-classes.html');
}

const express = require('express');
const server = express();

// Configuração do nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
// Configuração dos arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))
// Rotas da aplicação
.get('/', (request, response) => { return response.send('Hello world!') })
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
// Porta que aplicação está a escutar
.listen(5500);