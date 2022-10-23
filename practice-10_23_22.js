let numbers = [1, 3, 5, 65, 70, 74];
// console.log(numbers)

const test = (array) => {
  for (let counter = 1; counter < array.length; counter++) {
    console.log(counter);
  }
};

test(numbers);
// console.log(test(numbers))


numbers.push(7)
console.log(numbers)

favNum = numbers.map(num => {
    return `My fav number x 2 is ${num * 2}`
})

console.log(favNum)


