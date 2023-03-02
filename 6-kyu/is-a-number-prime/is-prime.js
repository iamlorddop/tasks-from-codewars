// Time complexity: O(sqrt(n))
// Space complexity: O(1)
function isPrime(num) {
	for(var i = 2; i <= Math.sqrt(num); i++)
	  if (num % i === 0) return false;
	return num > 1;
}