import { genRandomNumber, genRandomProgression } from '../gen-random.js';
import { askUserName, gameLoop } from '../index.js';

const playProgression = () => {
  const name = askUserName();

  console.log('What number is missing in the progression?');

  gameLoop(name, () => {
    const prog = genRandomProgression();
    const idx = genRandomNumber(prog.length);
    const res = prog[idx];

    prog[idx] = '..';

    return {
      question: `Question: ${prog.join(' ')}`,
      expected: `${res}`,
    };
  });
};

export default playProgression;
