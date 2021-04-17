function narcissistic(value) {
  const _value = String(value).split("");

  let _result = 0;

  for (ch of _value) {
    const num = parseInt(ch, 0);

    _result += Math.pow(num, _value.length);
  }

  return _result === value;
}

function narcissistic(value) {
  return (
    ("" + value).split("").reduce(function (p, c) {
      return p + Math.pow(c, ("" + value).length);
    }, 0) == value
  );
}

function narcissistic(value) {
  return (
    value
      .toString()
      .split("")
      .map((x, i, arr) => x ** arr.length)
      .reduce((a, b) => +a + +b) === value
  );
}

console.log(narcissistic(7), true, "7 is narcissistic");
console.log(narcissistic(371), true, "371 is  narcissistic");
console.log(narcissistic(1938), false, "1938 is not narcissistic");
