import { genRandomNumber } from '../gen-random.js';
import { askUserName, gameLoop } from '../index.js';

const YES = 'yes';
const NO = 'no';

// eslint-disable-next-line max-len
const PRIME_LIST = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

const isPrime = (number) => PRIME_LIST.includes(number);

const playPrime = () => {
  const name = askUserName();

  console.log(`Answer "${YES}" if given number is prime. Otherwise answer "${NO}".`);

  gameLoop(name, () => {
    const number = genRandomNumber();
    const res = isPrime(number) ? YES : NO;

    return {
      question: `Question: ${number}`,
      expected: `${res}`,
    };
  });
};

export default playPrime;
