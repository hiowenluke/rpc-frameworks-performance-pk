
const myJson = require('./__lib/myJson');

const net = require('net');
const port = 8081;
const host = 'localhost';

const client = new net.Socket();
client.connect(port, host);

const sayHello = () => {
	return new Promise(resolve => {
		client.once('data', data => {
			const message = data.toString();
			const result = myJson.parse(message);
			resolve(result);
		});

		client.write('sayHello#');
	})
};

const main = async () => {
	const result = await sayHello();
	// console.log(result);
};

module.exports = main;
// main();
