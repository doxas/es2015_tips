
import Util             from './lib.js';
import ComponentManager from './component.js';

console.log(`utility version: ${Util.VERSION}`);
console.log(Util.zeroPadding(99, 3));

let d = new Date();

console.log(Util.dateFormat(d) + ' ' + Util.timeFormat(d));

window.addEventListener('load', () => {
	let Manager = new ComponentManager();
	let checkbox = new Manager.CheckBox();
	document.body.appendChild(checkbox.getElement());
}, false);

