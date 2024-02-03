function getSectionIdFromScroll(scrollY, sizes){
	let total = 0;
	
	for (let i = 0; i <= sizes.length - 1; i++) {
	  total += sizes[i];
	  if (total > scrollY) {
		 return i;
	  }
	}
	
	return -1;
 }