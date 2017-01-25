export default function atoint (numString) {
	const retval = parseInt(numString, 10)
	if (isNaN(retval)) {
		throw new Error("Cannot convert " + numString + " to number")
	}
	return retval
}
