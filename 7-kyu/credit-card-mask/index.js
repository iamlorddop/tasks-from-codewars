function maskify(cc) {
	const firstPart = cc.slice(0, -4);
	const lastPart = cc.slice(-4);
	return "#".repeat(firstPart.length) + lastPart;
}