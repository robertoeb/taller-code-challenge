 const square = numbersArray => {
   const squareArray = numbersArray.map(number => number * number).sort((a, b) => a < b ? -1 : 1);
   return squareArray;
 }

 console.log(square([1, 2, 3, 5, 6, 8, 9]));
 
 console.log(square([-2, -1]));

 console.log(square([-10, -5, 0, 5, 10]));