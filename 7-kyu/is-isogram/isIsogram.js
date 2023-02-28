function isIsogram(str){
	var newStr = str.toLowerCase();
	
	for(var i = 0; i < newStr.length; ++i) {
		for(var j = i + 1; j < newStr.length; ++j) {
		  	if(newStr[i] === newStr[j]) {
				return false;
		  	}
		}
	}
	return true;
}