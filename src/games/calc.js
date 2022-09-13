import { genRandomNumber, genRandomOperator } from '../gen-random.js';
import { askUserName, gameLoop } from '../index.js';

const playCalc = () => {
  const name = askUserName();

  console.log('What is the result of the expression?');

  gameLoop(name, () => {
    const number1 = genRandomNumber();
    const number2 = genRandomNumber();
    const op = genRandomOperator();

    let res;

    switch (op) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      default:
        res = undefined;
    }

    return {
      question: `Question: ${number1} ${op} ${number2}`,
      expected: `${res}`,
    };
  });
};

export default playCalc;
