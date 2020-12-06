const char = 'Javascript';

const convertingChar = function (convert) {
  let string = /[a-z]/;
  let asciiNumber = [];
  if(convert.match(string)){
    for(let i = 0; i < convert.length; i++){
      const stringPush = convert.charCodeAt(i);
      asciiNumber.push(stringPush);
    }
  }
  return asciiNumber.join('');
}
console.log(convertingChar(char));



// callback

const convertingCharWithCallback = function (convertWithCallback) {
  let string = /[a-z]/;
  let asciiNumber = [];
  if(convertWithCallback.match(string)){
    for(let i = 0; i < convertWithCallback.length; i++){
      const stringPush = convertWithCallback.charCodeAt(i);
      asciiNumber.push(stringPush);
    }
  }
  return asciiNumber.join('');
}

const charWithCallback = function (convert, callback) {
  return callback(convert);
}

console.log(charWithCallback(char, convertingCharWithCallback));



// promise

const promiseChar = new Promise(function(resolve, reject){

  let isAscii = true;

  if (isAscii) {
    resolve(convertingChar(char));
  } else {
    reject(char);
  }
});

promiseChar.then(function(fromResolve) {
  console.log(`${fromResolve}`)
})
.catch(function(fromReject){
  console.log(`${fromReject}`)
});


