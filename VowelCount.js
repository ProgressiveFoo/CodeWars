function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("pyx"));
console.log(getCount("apyx"));
console.log(getCount("apyxeiou"));
