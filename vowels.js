function countVowels(word) {
  let count = 0;
  for (let i = 0; i <= word.length; i++) {
    if ("aeiouy".includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("burrito")); // devrait afficher 3