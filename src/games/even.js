import { genRandomNumber } from './gen-random.js';
import { askUserName, gameLoop } from './index.js';

const YES = 'yes';
const NO = 'no';

const playEven = () => {
  const name = askUserName();

  console.log(`Answer "${YES}" if the number is even, otherwise answer "${NO}".`);

  gameLoop(name, () => {
    const number = genRandomNumber();
    const isEven = number % 2 === 0;

    return {
      question: `Question: ${number}`,
      expected: isEven ? YES : NO,
    };
  });
};

export default playEven;
