function factorial(n) {
	if (n === 1 || n === 0) {
	  return 1;
	}
	
	if (n < 0 || n > 12) {
	  throw new RangeError('Argument out of range exception');
	}
	
	return factorial(n - 1) * n;
 }