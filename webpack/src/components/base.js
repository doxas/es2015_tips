
export default class ComponentBase {
	constructor(){
		this.listeners = {};
		this.wrap = document.createElement('div');
	}
	discardListeners(){
		let key = Object.keys(this.listeners);
		key.map((v) => {
			this.listeners[v] = null;
		});
		this.listeners = null;
	}
	on(eventName, listener){
		this.listeners[eventName] = listener;
	}
	emit(eventName, args){
		if(this.listeners.hasOwnProperty(eventName) === true){
			this.listeners[eventName](args);
		}
	}
	getElement(){
		return this.wrap;
	}
}

