
# RPC frameworks performance PK

If you care about the performance of the RPC frameworks, this PK can save you time. Yes, I spend a lot of time in this area, but now you do not having to.

## Install

```sh
git clone https://github.com/hiowenluke/rpc-frameworks-performance-pk rpc-pk
cd rpc-pk
npm install
```

## Run

```sh
node index.js
```

For each RPC frameworks:

1\. Start the server

2\. In the client, call the remote function and get the result

3\. Perform the 2nd step 10000 times

4\. Calculate the average times per second

## Results

```sh
...
========================================
Results
========================================
native-socket 10517 times/sec
booms         9700  times/sec
sofa-rpc-node 3071  times/sec
gRPC-node     2853  times/sec
socket.io     786   times/sec
========================================
Platform info:
macOS Mojave 10.14 x64
Intel(R) Core(TM) i7-4558U CPU @ 2.80GHz x 4
Total Memory 16 GB
Node.js v10.16.3
V8 6.8.275.32-node.54
```

The results is on my pc. It will be different on yours, but it does not affect the ranking here.

**Note**

By default, sofa-rpc-node and the RPC which based on socket.io do not participate in the pk. If you wanna them to join in, uncomment them in [./benchmarks/index.js](./benchmarks/index.js) before run this PK.

For sofa-rpc-node, you should install ZooKeeper first, such as on mac:

```sh
brew install zookeeper
```

## Conclusion

[Booms](https://github.com/hiowenluke/booms) is a high-performance RPC framework, much faster than [gRPC-node](https://github.com/grpc/grpc-node) and [sofa-rpc-node](https://github.com/sofastack/sofa-rpc-node).


## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke
