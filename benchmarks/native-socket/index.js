
const be = require('beasy')();
const fn = require('./client');

be.before('./server');
be.start(fn, 1000);
