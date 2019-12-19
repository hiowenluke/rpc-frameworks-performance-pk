
const { RpcClient } = require('sofa-rpc-node').client;
const logger = console;

const client = new RpcClient({
    logger,
});

const consumer = client.createConsumer({
    interfaceName: 'com.nodejs.test.TestService',
    serverHost: '127.0.0.1:12200',
});

let isInitialized;

async function init() {
    if (isInitialized) return;
    await consumer.ready();
    isInitialized = true;
}

async function sayHello() {
    await init();
    const result = await consumer.invoke('sayHello', []);
    return result;
}

const main = async () => {
    const result = await sayHello();
    // console.log('Greeting:', result);
};

module.exports = main;
// main();
