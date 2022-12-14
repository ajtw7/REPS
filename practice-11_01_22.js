let firstNames = ["Jerome", "Ritchie", "Clyde", "Michael", "Darnell", "Steph"];
console.log(firstNames);

let printFirstNames = firstNames.map((name) => {
  console.log(`My first name is ${name}.`);
});

printFirstNames;

const uppercaseFirstName = firstNames[0].toUpperCase();
console.log(uppercaseFirstName);

const uppercaseFN = firstNames.map((name) => {
  return `My first name is ${name.toUpperCase()}!`;
});

console.log(uppercaseFN);

const uppercaseFN2 = firstNames.forEach((name) => {
  console.log();
});

let names = ['drew', 'drea']
console.log(names)


console.log(uppercaseFN2)