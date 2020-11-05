console.log(true);
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let doubelNumbers = (num) => {
  let newNumbersArr = num.map((a) => {
    return a * 2;
  });
  return newNumbersArr;
};

let newArr = doubelNumbers(numbers);

console.log(newArr)