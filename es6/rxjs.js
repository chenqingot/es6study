const { rxjs, range, of, interval} = require('rxjs');
const { map, filter,pipe } = require('rxjs/operators');

var numbers = of(10, 20, 30);
var letters = of('a', 'b', 'c');
var interval1 = interval(1000);
var result = numbers.me(letters).concat(interval1);
result.subscribe(x => console.log(x));

// Node.js has included experimental support for ES6 support. Read more about here: https://nodejs.org/api/esm.html.
// TLDR; Save the file with ES6 modules with .mjs extension and run it like:
// node --experimental-modules my-app.mjs


