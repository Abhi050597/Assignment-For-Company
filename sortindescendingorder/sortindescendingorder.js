const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sortArrayDescending(arr) {
  arr.sort((a, b)=> {
    return b - a;
  });
}

rl.question('Enter a list of numbers separated by spaces: ', function(input) {
 
  const numbers = input.split(' ').map(Number);


  if (numbers.length === 0 || numbers.some(isNaN)) {
    console.log('Invalid input. Please enter a list of numbers separated by spaces.');
  } else {
  
    sortArrayDescending(numbers);

    console.log('Sorted array in descending order:', numbers);
  }

 
  rl.close();
}); 