"use strict";
const foo = Object.freeze({});
// const foo = {};
foo.prop = 123;
console.log(foo.prop);
