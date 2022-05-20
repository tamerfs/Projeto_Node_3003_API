const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3003;
const host = 'http://localhost';

app.use(middlewares);

app.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
    '/heroes\\?name=:term': '/heroes?q=:term',
    })
);

app.use(router);

// vai escutar a porta setada acima na const e imprimir no console o link ara acessar.
app.listen(port, () => {
  console.log('O servidor esta rodando em: ', host+":"+port);
});

module.exports = app;
