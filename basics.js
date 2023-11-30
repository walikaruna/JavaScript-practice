let arr = ["apple", "mango", "apple",
		"orange", "mango", "mango", "papaya"];

function removeDuplicates(arr) {
	return arr.filter((item,
		index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
