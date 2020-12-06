var str = 'I am a student in Computer Science and JavaScript academy at Semos Education. I am taking a course for JavaScript currently. My goals are to become a Software Developer after that, so I am working toward it right now.'

var str1 = str.split(' ');

function myFunction(array) {
  let arr = [];
  let evenStrings = str1;
  let occurencies = new Object();
for (let i = 0; i < array.length; i++) {
	if (array[i].length % 2 === 0) {
	arr.push(array[i]);
	}
  };
for (let i = 0; i < evenStrings.length; i++) {
    if(occurencies[evenStrings[i]] != null) {
      occurencies[evenStrings[i]] += 1;
    } else {
      occurencies[evenStrings[i]] = 1;
    }
  }
return {
    arr,
    occurencies
  }
}
console.log(myFunction(str1));


