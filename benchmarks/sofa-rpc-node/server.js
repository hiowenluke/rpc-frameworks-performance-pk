
const { RpcServer } = require('sofa-rpc-node').server;
const { ZookeeperRegistry } = require('sofa-rpc-node').registry;
const logger = console;

const registry = new ZookeeperRegistry({
    logger,
    address: '127.0.0.1:2181',
});

const server = new RpcServer({
    logger,
    registry,
    port: 12200,
});

server.addService({
    interfaceName: 'com.nodejs.test.TestService',
}, {
    async sayHello(username = 'world') {
        return 'hello ' + username;
    },
});

server.start()
    .then(() => {
        server.publish();
    });
