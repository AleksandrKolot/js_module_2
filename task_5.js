function checkForSpam(message) {
  // Write code under this line
  message =
    message.toLowerCase().includes('spam') || message.includes('sale')
      ? true
      : false;
  return message;
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// function checkForSpam(message) {
//   // Write code under this line
//   let result = false;
//   message = message.toLowerCase();
//   if (message.includes('spam') || message.includes('sale')) {
//     result = true;
//   }

//   return result;
