import readlineSync from 'readline-sync';

const MAX_CORRECT_ANSWERS = 3;
const YES = 'yes';
const NO = 'no';

console.log('Welcome to the Brain Games!');

const genRandom = () => Math.floor(Math.random() * 100);

const playEven = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);
  console.log(`Answer "${YES}" if the number is even, otherwise answer "${NO}".`);

  let correctAnswers = 0;

  while (correctAnswers < MAX_CORRECT_ANSWERS) {
    const number = genRandom();
    const isEven = number % 2 === 0;

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if ((isEven && answer === YES) || (!isEven && answer === NO)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? YES : NO}'.`);
      break;
    }
  }

  if (correctAnswers === MAX_CORRECT_ANSWERS) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playEven;
