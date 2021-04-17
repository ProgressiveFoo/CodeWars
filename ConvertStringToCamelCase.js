function toCamelCase(str) {
  var regExp = /[-_]\w/gi;

  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
