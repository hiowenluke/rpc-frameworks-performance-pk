
const be = require('beasy')();
const times = 10000;

be.compare([
	{
		name: 'native-socket',
		before: './native-socket/server',
		start: './native-socket/client',
	},

	{
		name: 'booms',
		before: './booms/server',
		start: './booms/client',
	},

	{
		name: 'gRPC-node',
		before: './gRPC-node/server',
		start: './gRPC-node/client',
	},

	// Install ZooKeeper before uncomment the below code to run it
	// 		{
	// 			name: 'sofa-rpc-node',
	// 			before: './sofa-rpc-node/server',
	// 			start: './sofa-rpc-node/client',
	// 		},

	// The RPC based on socket.io is too slow. Change the times above to 1000 before run it.
	// 		{
	// 			name: 'socket.io-rpc',
	// 			before: './socket.io-rpc/server',
	// 			start: './socket.io-rpc/client',
	// 		},

], times);
