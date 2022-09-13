import { genRandomNumber } from '../gen-random.js';
import { askUserName, gameLoop } from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const playGCD = () => {
  const name = askUserName();

  console.log('Find the greatest common divisor of given numbers.');

  gameLoop(name, () => {
    const number1 = genRandomNumber();
    const number2 = genRandomNumber();
    const res = gcd(number1, number2);

    return {
      question: `Question: ${number1} ${number2}`,
      expected: `${res}`,
    };
  });
};

export default playGCD;
