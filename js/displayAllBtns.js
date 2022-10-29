const btnContainer = document.querySelector('.btn-container');

function displayAllBtns(btnList, activeIndex) {
  btnContainer.innerHTML = btnList
    .map((singleBtn) => {
      const isPrevORNext = singleBtn === 'prev' || singleBtn === 'next';
      return `
    <button data-btn="${singleBtn}" class="${
        isPrevORNext ? `${singleBtn}-btn` : 'page-btn'
      } ${singleBtn === activeIndex ? 'active-btn' : ''}">${singleBtn}</button>
    `;
    })
    .join('');
}

export default displayAllBtns;
