
import util from './lib.js';

console.log(util.zeroPadding(99, 3));

let d = new Date();

console.log(util.dateFormat(d) + ' ' + util.timeFormat(d));

