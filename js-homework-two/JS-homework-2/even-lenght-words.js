var str = 'I am a student in Computer Science and JavaScript academy at Semos Education. I am taking a course for JavaScript currently. My goals are to become a Software Developer after that, so I am working toward it right now.'

var str1 = str.split(' ');
console.log(str1); 


function myFunction(array) {
	let arr = []
	for (let i = 0; i < array.length; i++) {
		if (array[i].length % 2 === 0) {
		arr.push(array[i]);
		}
	}
	return arr
}
console.log(myFunction(str1));


let evenStrings = myFunction(str1);
let occurencies = new Object();


for (let i = 0; i < evenStrings.length; i++) {
	if(occurencies[evenStrings[i]] != null) {
		occurencies[evenStrings[i]] += 1;
	} else {
		occurencies[evenStrings[i]] = 1;
	}
}
console.log(occurencies); 