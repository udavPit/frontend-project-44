const genRandomNumber = (max = 10) => Math.floor(Math.random() * max);

const genRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const idx = genRandomNumber(3);
  return operators[idx];
};

const genRandomProgression = (len = 10) => {
  const start = genRandomNumber();
  const step = genRandomNumber();
  const progression = [];

  for (let i = 0; i < len; i += 1) {
    progression.push(i * step + start);
  }

  return progression;
};

export {
  genRandomNumber,
  genRandomOperator,
  genRandomProgression,
};
