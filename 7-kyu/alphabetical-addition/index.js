function addLetters(...letters) {
	if (letters.length == 0) {
	  return 'z';
	}
	
	let sum = letters.reduce(
	  (acc, val) => {
		 let newAcc = acc + val.charCodeAt(0) - 96;
		 return newAcc > 26 ? newAcc - 26 : newAcc;
	  }, 0);
	
	return String.fromCharCode(sum + 96);
 }