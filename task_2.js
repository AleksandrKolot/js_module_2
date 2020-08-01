const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
  message.split(' ').length * pricePerWord;

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);
