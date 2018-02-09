
let loopFunc = () => {
	// ループのなかで模擬的にデータ構造を作る
	let arr = new Array(100).fill('hoge');

	// つい出来心でコンソールに出しちゃう
	console.log(arr);

	// 再帰
	setTimeout(loopFunc, 500);
};

window.addEventListener('load', () => {
	loopFunc();
}, false);

