const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();

server.connection({port: 3000});

server.register(Inert, function(){});

