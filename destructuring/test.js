// let [x, y] = [1, 2]
// console.log(x, y);

// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
// let [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z] = fibs();

// console.error(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z);

// console.log([1, undefined, 3].map((x = 'yes') => x));

// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//     console.log(key + " is " + value)
// }


// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `;

// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' },
// ];

// console.log(tmpl(data));


// let sender = '<script>alert("abc")</script>'; // 恶意
// let sender1 = '<script>alert("xyz")</script>'; // 恶意
// let message =
//     SaferHTML`<p>${sender} has sent you a message.${sender} </p>`;

// function SaferHTML(templateData) {
//     let s = templateData[0];
//     console.log(templateData[0], '111');

//     for (let i = 1; i < arguments.length; i++) {


//         let arg = String(arguments[i]);

//         // Escape special characters in the substitution.
//         s += arg.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;");

//         // Don't escape special characters in the template.
//         console.log(arguments, '2.1');
//         console.log(templateData, '2.2');
//         s += templateData[i];
//     }
//     return s;
// }


// console.log(message, 333);


function is32Bit(c) {
  return c.codePointAt(0) > 0xffff;
}


console.log(is32Bit("𠮷"));
console.log(is32Bit("吉"));