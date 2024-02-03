function sumArray(array) {
	if (array == null || !array.length) {
	  return 0;
	}
	
	let result = 0;
	let sortedArray = array.sort((a, b) => a - b);
	
	for (let i = 1; i < sortedArray.length - 1; i++) {
	  result += sortedArray[i];
	}
	
	return result;
}