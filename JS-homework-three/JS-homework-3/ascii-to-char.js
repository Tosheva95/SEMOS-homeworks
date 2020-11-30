const ascii = '74971189711599114105112116';

const convertAsciiToChar = function (asciiFunction) {

  const charList = [];
  for (let i = 0; i < ascii.length;) {
    const numberCombination = ascii[i] === '1' ? 3 : 2;
    charList.push(ascii.substr(i, numberCombination));
    i += numberCombination;
  }
  const converting = String.fromCharCode(...charList);
  console.log(`"${converting}"`);
}

convertAsciiToChar(ascii);



//callback

const convertAsciiToCharWithCallback = function (asciiFunctionWithCallback) {

  const charList = [];
  for (let i = 0; i < ascii.length;) {
    const numberCombination = ascii[i] === '1' ? 3 : 2;
    charList.push(ascii.substr(i, numberCombination));
    i += numberCombination;
  }
  const converting = String.fromCharCode(...charList);
  console.log(`"${converting}"`);
}

const convertAsciiWithCallback = function (asciiFunction, callback){
  return callback(asciiFunction);

}

convertAsciiWithCallback(ascii, convertAsciiToCharWithCallback);



// promise

const promiseAscii = new Promise(function(resolve, reject){

  let isChar = true;

  if (isChar) {
    resolve(convertAsciiToCharWithCallback(ascii));
  } else {
    reject(ascii);
  }
});

promiseAscii.then(function(fromResolve) {
  console.log(`${fromResolve}`)
})
.catch(function(fromReject) {
  console.log(`${fromReject}`)
});

