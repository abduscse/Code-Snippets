const DB = {
	'arr1': ['abdus', 'anitha'],
	'arr2': ['23', '24'],
	'arr3': ['male', 'female']
}

function getFee(isMember) {
	let index = -1;
	DB.arr1.indexOf(isMember) >= 0 ? index = DB.arr1.indexOf(isMember) :
		DB.arr2.indexOf(isMember) >= 0 ? index = DB.arr2.indexOf(isMember) : index = DB.arr3.indexOf(isMember);
	user = {
		'name': DB.arr1[index],
		'age': DB.arr2[index],
		'gender': DB.arr3[index]
	};
	return user;
}

console.log(getFee('abdus'));
console.log(getFee('female'));