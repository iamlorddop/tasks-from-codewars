function numberOfRectangles(m, n) {
	let count = 0;
	
	for (let i = 1; i <= m; i++) {
	  for (let j = 1; j <= n; j++) {
		 count += (m - i + 1) * (n - j + 1);
	  }
	}
	
	return count;
}