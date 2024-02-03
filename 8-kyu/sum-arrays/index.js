function sum (numbers) {
	"use strict";
	if (!numbers.length) {
	  return 0;
	}
	return numbers.reduce((num, acc) => num += acc, 0);
};