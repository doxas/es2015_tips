
import ComponentBase from './base.js';

export default class CheckBox extends ComponentBase {
	constructor(value = false, caption = 'toggle'){
		super();
		this.checkbox = document.createElement('input');
		this.checkbox.classList.add('checkbox_component_checkbox');
		this.checkbox.setAttribute('type', 'checkbox');
		this.checkbox.checked = value;
		this.checkbox.style.display = 'none';

		this.label = document.createElement('label');
		this.label.classList.add('checkbox_component_label');
		this.label.style.userSelect = 'none';

		this.box = document.createElement('span');
		this.box.classList.add('checkbox_component_box');
		this.box.style.border        = '3px solid silver';
		this.box.style.borderRadius  = '5px';
		this.box.style.color         = 'royalblue';
		this.box.style.fontSize      = '14px';
		this.box.style.fontWeight    = 'bold';
		this.box.style.textAlign     = 'center';
		this.box.style.verticalAlign = 'bottom';
		this.box.style.display       = 'inline-block';
		this.box.style.margin        = '0px 5px 0px 0px';
		this.box.style.width         = '20px';
		this.box.style.height        = '20px';
		if(value === true){this.box.textContent = '🍆';}

		this.label.appendChild(this.checkbox);
		this.label.appendChild(this.box);
		this.label.appendChild(document.createTextNode(caption));
		this.wrap.appendChild(this.label);

		this.discard = this.discard.bind(this);

		this.changeEvent = (eve) => {
			if(this.checkbox.checked === true){
				this.box.textContent = (['🍆', '🍈', '🍣'])[Math.floor(Math.random() * 3)];
			}else{
				this.box.textContent = '';
			}
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
		this.checkbox    = null;
		this.label       = null;
		this.wrap        = null;
		this.discardListeners();
	}
	getValue(){
		return this.checkbox.checked;
	}
	static get events(){
		return ['change'];
	}
}

