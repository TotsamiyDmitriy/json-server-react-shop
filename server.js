const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    '/*': '/$1',
  }),
);
server.use(router);

server.listen(4001, () => {
  console.log('JSON SERVER STARTED');
});


module.exports = server