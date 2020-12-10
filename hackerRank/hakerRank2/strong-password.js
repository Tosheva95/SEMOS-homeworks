'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
let upperCaseChar=0;
    let lowerCaseChar=0;
    let specialChar=0;
    let digit=0;
    let musthaveChars=0;
    for(let i=0; i<n; i++){
        if(password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90){
            upperCaseChar++;
        }
        else if(password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122){
            lowerCaseChar++;
        }
        else if(password.charAt(i)=='!' || password.charAt(i)=="@" || password.charAt(i)=="#" ||
                password.charAt(i)=="$" || password.charAt(i)=="%" || password.charAt(i)=="^" ||
                password.charAt(i)=="*" || password.charAt(i)=="&" || password.charAt(i)=="(" ||
                password.charAt(i)==")" || password.charAt(i)=="-" || password.charAt(i)=="+"){
            specialChar++;
        }
        else if(password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57){
            digit++;
        }    
    }
    if(upperCaseChar==0){
        musthaveChars++;
    }
    if(lowerCaseChar==0){
        musthaveChars++;
    }
    if(specialChar==0){
        musthaveChars++;
    }
    if(digit==0){
        musthaveChars++;
    }
    let len= n+musthaveChars;
    if(len<6){
        return ((6-len) + musthaveChars);
    }
    else{
        return musthaveChars;
    }
}

function main() {
    var n = parseInt(readLine());
    var password = readLine();
    var answer = minimumNumber(n, password);
    console.log("" + answer + "\n");

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
