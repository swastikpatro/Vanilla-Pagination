import getRange from './getRange.js';

const container = document.querySelector('.container');
function handleLoad() {
  container.innerHTML = [...getRange()]
    .map((single) => {
      return `
    <article class='skeleton-card'>
    <div class='skeleton-img'></div>
      <div class='skeleton-heading'></div>
      <div class="skeleton-btn"></div>
      </article>
      `;
    })
    .join('');
}

export default handleLoad;
