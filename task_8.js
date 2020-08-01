function reduceArray(array) {
  // Write code under this line
  let total = 0;
  if (array !== null) {
    for (const element of array) {
      total += element;
    }
  }
  return total;
}

// if (array !== null) {
//   for (i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }
// }
console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
