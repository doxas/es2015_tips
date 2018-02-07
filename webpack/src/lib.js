
export default class Utilities {
	static get VERSION(){return '0.0.1';}
	/**
	 * format of number
	 * @param {number} number - integer
	 * @param {number} [length=2] - format string length
	 */
	static zeroPadding(number, length = 2){
		return (new Array(length).join('0') + number).substr(-length);
	}
	/**
	 * format of date (year, month, date)
	 * @param {Date} date - date instance
	 * @param {string} [delimiter='/'] - string of delimiter
	 */
	static dateFormat(date, delimiter = '/'){
		let y = date.getFullYear();
		let m = Utilities.zeroPadding(date.getMonth() + 1, 2);
		let d = Utilities.zeroPadding(date.getDate(), 2);
		return y + delimiter + m + delimiter + d;
	}
	/**
	 * format of time (hours, minutes, seconds)
	 * @param {Date} date - date instance
	 * @param {string} [delimiter=':'] - string of delimiter
	 */
	static timeFormat(date, delimiter = ':'){
		let h = Utilities.zeroPadding(date.getHours(), 2);
		let i = Utilities.zeroPadding(date.getMinutes(), 2);
		let s = Utilities.zeroPadding(date.getSeconds(), 2);
		return h + delimiter + i + delimiter + s;
	}
}

