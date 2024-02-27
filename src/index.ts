export {};

// EXAMPLE 1 - Declare a Function with variable Number of Arguments in TS

function getArgsAsArray(...args: string[]) {
  console.log(args); // 👉️ ['a', 'b', 'c']

  return args;
}

console.log(getArgsAsArray('a', 'b', 'c'));

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type alias or an interface

// type Multiply = (...numbers: number[]) => number;

// const multiply: Multiply = (...numbers) => {
//   console.log(numbers);
//   return numbers.reduce((acc, curr) => acc * curr, 1);
// };

// console.log(multiply(1, 2, 3, 4)); // 👉️ 24
