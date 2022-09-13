const genRandomNumber = () => Math.floor(Math.random() * 100);

const genRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const idx = Math.floor(Math.random() * 3);
  return operators[idx];
};

export {
  genRandomNumber,
  genRandomOperator,
};
