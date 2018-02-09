
// グローバル空間にオブジェクトを定義
window.refs = {data: 'global variable'};

// グローバル空間（広いスコープ）で関数や変数を定義
function clickEventListener(){
	console.log(window.refs);
}

let loopFunc = () => {
	let body = document.body;
	while(body.children.length > 0){
		body.firstChild.removeEventListener('click', clickEventListener);
		let elm = body.removeChild(body.firstChild);
		elm = null;
	}
	// DOM 生成
	let element = document.createElement('div');

	// 現在時のタイムスタンプ
	element.textContent = Date.now();

	// 生成した DOM にイベントリスナを登録
	element.addEventListener('click', clickEventListener, false);

	// body に生成した DOM を append
	body.appendChild(element);

	// 再帰
	setTimeout(loopFunc, 50);
};

window.addEventListener('load', () => {
	loopFunc();
}, false);

