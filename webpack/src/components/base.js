
export default class ComponentBase {
	constructor(){
		this.listeners = {};
		this.wrap = document.createElement('div');
	}
	discard(){
		let key = Object.keys(this.listeners);
		key.map((v) => {
			this.listeners[v] = null;
		});
		this.listeners = null;
	}
	getElement(){
		return this.wrap;
	}
	on(eventName, listener){
		this.listeners[eventName] = listener;
	}
	emit(eventName, args){
		if(this.listeners.hasOwnProperty(eventName) === true){
			this.listeners[eventName](args);
		}
	}
}

