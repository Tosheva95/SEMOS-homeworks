function findLongestWord(array) {
  let longestWord = []
  array.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  })
  return longestWord;
}
const cities = findLongestWord(['Skopje', 'Gevgelija', 'Kavadarci', 'Negotino', 'Veles', 'Ohrid', 'Gostivar', 'Struga']);
console.log(cities);