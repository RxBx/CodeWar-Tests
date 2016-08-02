function reverse(str) {
	return str.length < 2 ? str : str.substr(str.length-1) + reverse(str.substr(0, str.length-1));
}

//best solution
function reverse(str) {
    return str.length > 1 ? reverse(str.slice(1)) + str[0] : str;
}

//makes use of string index numbering, and slicing down the string, rather than pullng substring