
// es5 style class
let MyFunc = function(){};
MyFunc.prototype.print = function(){
	console.log(this);
};

window.addEventListener('load', function(){
	let f = new MyFunc();
	// click event に MyFunc.print を登録
	let body = window.document.body;
	body.addEventListener('click', f.print, false);
}, false);


