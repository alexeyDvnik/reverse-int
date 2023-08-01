module.exports = function reverse(n) {
	let result = ('' + n).
	split('').
	reduce( (resArr, current, index, arr) => {
		if ( (index === 0 && current === '-') || (index ===  arr.length - 1 && current === '0') ) {
			return resArr;
		} else {
			resArr.unshift(current);
			return resArr;
		}
	}, [] ).
	join('');
	return +result;
}
