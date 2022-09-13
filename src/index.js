import readlineSync from 'readline-sync';

const MAX_CORRECT_ANSWERS = 3;

console.log('Welcome to the Brain Games!');

const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const gameLoop = (name, questionFn) => {
  let correctAnswers = 0;

  while (correctAnswers < MAX_CORRECT_ANSWERS) {
    // console.log(questionFn());
    const { question, expected } = questionFn();

    console.log(question);

    const answer = readlineSync.question('Your answer: ');

    if (answer === expected) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
      break;
    }
  }

  if (correctAnswers === MAX_CORRECT_ANSWERS) {
    console.log(`Congratulations, ${name}!`);
  }
};

export {
  askUserName,
  gameLoop,
};
