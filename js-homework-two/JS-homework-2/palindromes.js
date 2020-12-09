
var list = ['Македонија','анаволимилована','дај ми една чаша полна со вино','радар','кајак', 'калабалак','нели не си ти сенилен','јадење и пиење дај','слушател','фудбал','музика'];

function findPalindrome(list) {
let palindromes = [];
for (let i = 0; i < list.length; i++) {
let pal = list[i].split('').reverse().join('');
	if (pal.replaceAll(' ', '') === list[i].replaceAll(' ', '')) {
            palindromes.push(list[i]);
        }
    }
return palindromes;
}
findPalindrome(list);
