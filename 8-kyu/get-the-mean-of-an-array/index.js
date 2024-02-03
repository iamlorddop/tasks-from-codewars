function getAverage(marks){
	const sum = marks.reduce((mark, acc) => mark += acc, 0);
	
	return Math.floor(sum / marks.length);
}