const getItemsString = function (array) {
  // Write code under this line
  let result = '';
  for (let i = 1; i < array.length + 1; i += 1) {
    result += `${i} - ${array[i - 1]}\n`;
  }
  return result;
};
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
