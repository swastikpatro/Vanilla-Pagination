const NO_OF_CARDS_TO_SHOW = 11;

function getRange() {
  return Array.from({ length: NO_OF_CARDS_TO_SHOW }, (v, i) => i + 1);
}

export default getRange;
