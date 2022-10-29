import getSinglePageFollowers from './getSinglePageFollowers.js';
import displaySinglePage from './displaySinglePage.js';
import displayAllBtns from './displayAllBtns.js';

const btnContainer = document.querySelector('.btn-container');
let allBtns;
let lastElement;
let firstElement;
let curr;

function listOfBtns(data) {
  return [
    'prev',
    ...new Set([...data.map((singleData) => singleData.iteration)]),
    'next',
  ];
}

async function init() {
  const currentActiveBtn = 1;
  const [totalDataOfFollowers, singlePageData] = await getSinglePageFollowers(
    currentActiveBtn
  );

  displaySinglePage(singlePageData);
  displayAllBtns(listOfBtns(totalDataOfFollowers), currentActiveBtn);
  allBtns = [...document.querySelectorAll('.page-btn')];
  lastElement = allBtns[allBtns.length - 1];
  firstElement = allBtns[0];
}

async function handleClick(e) {
  const btnClicked = e.target;
  if (!('btn' in e.target.dataset)) {
    return;
  }
  if (btnClicked.classList.contains('active-btn')) {
    return;
  }

  curr = btnContainer.querySelector('.active-btn');
  curr.classList.remove('active-btn');

  if (
    btnClicked.classList.contains('prev-btn') ||
    btnClicked.classList.contains('next-btn')
  ) {
    if (btnClicked.dataset.btn === 'prev') {
      curr =
        curr.previousElementSibling.dataset.btn === 'prev'
          ? lastElement
          : curr.previousElementSibling;
    } else {
      curr =
        curr.nextElementSibling.dataset.btn === 'next'
          ? firstElement
          : curr.nextElementSibling;
    }

    curr.classList.add('active-btn');

    const [, singlePageData] = await getSinglePageFollowers(curr.dataset.btn);
    displaySinglePage(singlePageData);
    return;
  }

  curr.classList.remove('active-btn');
  btnClicked.classList.add('active-btn');

  const [, singlePageData] = await getSinglePageFollowers(
    btnClicked.dataset.btn
  );

  displaySinglePage(singlePageData);
}

window.addEventListener('DOMContentLoaded', init);
btnContainer.addEventListener('click', handleClick);
