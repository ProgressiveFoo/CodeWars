function uniqueInOrder(iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
