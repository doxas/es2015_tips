
import ComponentBase from './base.js';

export default class CheckBox extends ComponentBase {
	constructor(value = false, caption = 'toggle'){
		super();
		this.checkbox = document.createElement('input');
		this.checkbox.setAttribute('type', 'checkbox');
		this.checkbox.checked = value;
		this.label = document.createElement('label');
		this.label.appendChild(this.checkbox);
		this.label.appendChild(document.createTextNode(caption));
		this.wrap.appendChild(this.label);

		this.discard = this.discard.bind(this);

		this.changeEvent = (eve) => {
			this.emit('change', eve);
		};
		this.checkbox.addEventListener('change', this.changeEvent, false);
	}
	discard(){
		this.checkbox.removeEventListener('change', this.changeEvent);
		this.checkbox.parentNode.removeChild(this.checkbox);
		this.label.parentNode.removeChild(this.label);
		this.wrap.parentNode.removeChild(this.wrap);
		this.changeEvent = null;
		this.checkbox = null;
		this.label = null;
		this.wrap = null;
		this.discardListeners();
	}
	getValue(){
		return this.checkbox.checked;
	}
	static get events(){
		return ['change'];
	}
}

