const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');

function displaySinglePage(singleListData) {
  container.innerHTML = singleListData
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      return `
    <article class='card'>
    <img src="${avatar_url}" class='skeleton-img' alt='person' />
    <h4>${login}</h4>
    <a href="${html_url}" class="btn">view profile</a>
    </article>
    `;
    })
    .join('');
}

export default displaySinglePage;
