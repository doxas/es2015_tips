
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

		this.onChange = this.onChange.bind(this);

		this.changeEvent = (eve) => {
			this.emit('change', eve);
		};
		this.checkbox.addEventListener('change', this.changeEvent, false);
	}
	onDiscard(){
		this.checkbox.removeEventListener('change', this.changeEvent);
		this.checkbox.parentNode.removeChild(this.checkbox);
		this.label.parentNode.removeChild(this.label);
		this.wrap.parentNode.removeChild(this.wrap);
		this.discard();
	}
	onChange(eve){
		console.log('change event fired', eve);
	}
	static get events(){
		return ['change'];
	}
}

