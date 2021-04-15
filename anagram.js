function anagrams(word, words) {
  const nword = word.split("").sort().join("");
  let ang = [];
  words.forEach(function (w) {
    if (w.split("").sort().join("") === nword) {
      ang.push(w);
    }
  });
  return ang;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));
