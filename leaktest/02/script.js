
// グローバル空間にオブジェクトを定義
window.refs = {data: 'global variable'};

let loopFunc = () => {
	// DOM 生成
	let elm = document.createElement('div');

	// 現在時のタイムスタンプ
	elm.textContent = Date.now();

	// 生成した DOM にイベントリスナを登録
	let clickEventListener = () => {
		// ★ ここでグローバル空間にいる refs を参照している
		console.log(window.refs);
	};
	elm.addEventListener('click', clickEventListener, false);

	// body に生成した DOM を append
	let body = document.body;
	while(body.children.length > 0){
		body.removeChild(body.firstChild);
	}
	body.appendChild(elm);

	// 再帰
	setTimeout(loopFunc, 50);
};

window.addEventListener('load', () => {
	loopFunc();
}, false);

