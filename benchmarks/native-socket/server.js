
const myJson = require('./__lib/myJson');

const net = require('net');
const host = 'localhost';
const port = 8081;

const obj = {
	async sayHello(username = 'world') {
		return 'Hello ' + username;
	}
};

const server = net.createServer(sock => {

	process.on('SIGTERM', () => {
		server.close( () => {
			process.exit(0);
		});
	});

	sock.on('data', async data => {
		const message = data.toString();
		const [funcName, args] = myJson.parseMessage(message);
		const result = await obj[funcName](...args);

		const resultStr = myJson.stringify(result);
		sock.write(resultStr);
	});
});

server.listen(port, host);
console.log('Server listening on ' + host +':'+ port);
