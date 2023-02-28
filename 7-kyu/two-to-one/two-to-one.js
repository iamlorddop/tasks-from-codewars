function longest(s1, s2) {
	const onlyUnique = (value, index, self) => self.indexOf(value) === index;
	return (s1 + s2).split('').filter(onlyUnique).sort().join('')
}