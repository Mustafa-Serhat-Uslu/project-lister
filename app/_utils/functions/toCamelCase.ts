export function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, (match) => match.toLowerCase());
}

// // Example usage:
// console.log(toCamelCase("hello world")); // "helloWorld"
// console.log(toCamelCase("convert-this_toCamelCase")); // "convertThisToCamelCase"
// console.log(toCamelCase("CAMEL CASE example")); // "camelCaseExample"
