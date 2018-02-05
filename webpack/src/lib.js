
export default class Utilities {
	/**
	 * format of number
	 * @param {number} number - integer
	 * @param {number} [length] - default length is 2
	 */
	static zeroPadding(number, length = 2){
		return (new Array(length).join('0') + number).substr(-length);
	}
}

