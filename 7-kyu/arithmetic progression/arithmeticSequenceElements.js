function arithmeticSequenceElements(a, d, n) {
	var arr = [a]
	
	for (var i = 1; i < n; i++) 
	  arr[i] = arr[i - 1] + d
	
	return arr.join(", ")
}