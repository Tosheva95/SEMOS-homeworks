const string = "j97va11599ri112116";

const charAndAscii = function (charAndAsciiCombination) {
    const char = /[a-z]/;
    const array = [];
      for (let i = 0; i < charAndAsciiCombination.length; i++) {
        if (charAndAsciiCombination[i].match(char)) {
          let charToNumber = charAndAsciiCombination.charCodeAt(i);
          array.push(charToNumber);
        } else {
          const asciiToChar = charAndAsciiCombination[i] === "1" ? 3 : 2;
          const addToArray = String.fromCharCode(
            Number(charAndAsciiCombination.substr(i, asciiToChar))
          );
          array.push(addToArray);
          i += asciiToChar - 1;
        }
      }
      return array.join('');     
    }

console.log(charAndAscii(string));


// // Callback

const charAndAsciiCallBack = function (charAndAsciiCombinationCallback) {
  const char = /[a-z]/;
  const array = [];
    for (let i = 0; i < charAndAsciiCombinationCallback.length; i++) {
      if (charAndAsciiCombinationCallback[i].match(char)) {
        let charToNumber = charAndAsciiCombinationCallback.charCodeAt(i);
        array.push(charToNumber);
      } else {
        const asciiToChar = charAndAsciiCombinationCallback[i] === "1" ? 3 : 2;
        const addToArray = String.fromCharCode(
          Number(charAndAsciiCombinationCallback.substr(i, asciiToChar))
        );
        array.push(addToArray);
        i += asciiToChar - 1;
      }
    }
    return array.join('');     
  }


  const callbackFunction = function (charAndAsciiCombination, callback) {
    return callback(charAndAsciiCombination);
  }
  
  console.log(callbackFunction(string, charAndAsciiCallBack));



// // Promise

const promise = new Promise (function(resolve, reject) {
  let charAndAsciiPromise = true;

  if (charAndAsciiPromise) {
    resolve(charAndAscii(string))
  }
  else {
    reject(string);
  }
});

promise.then(function(fromResolve) {
  console.log(`${fromResolve}`)
}).catch(function(fromReject){
  console.log(`${fromReject}`)
});


