import fetchFollowers from './fetchFollowers.js';
import deepClone from './deepClone.js';
const NO_OF_CARDS_TO_SHOW = 11;
const URL = 'https://api.github.com/users/john-smilga/followers?per_page=100';

async function getSinglePageFollowers(clickedNum) {
  const dataOfFollowers = await fetchFollowers(URL);
  const No_Of_Iterations = Math.trunc(
    dataOfFollowers.length / NO_OF_CARDS_TO_SHOW
  );
  const containsExtra = dataOfFollowers.length % NO_OF_CARDS_TO_SHOW;
  const dataObj = {};
  const dataClone = [...deepClone(dataOfFollowers)];
  dataClone.forEach((data, i) => {
    data['iteration'] = Math.floor(i / NO_OF_CARDS_TO_SHOW) + 1;
  });

  for (
    let i = 0;
    i < (containsExtra ? No_Of_Iterations + 1 : No_Of_Iterations);
    i++
  ) {
    dataObj[i + 1] = dataClone.filter(
      (singleData) => singleData.iteration === i + 1
    );
  }

  return [dataClone, dataObj[clickedNum]];
}

export default getSinglePageFollowers;
