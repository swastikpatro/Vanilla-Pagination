import handleLoad from './skeleton.js';
const mainHeading = document.querySelector('.section-title h1');
const underline = document.querySelector('.section-title .underline');

const fetchFollowers = async (url) => {
  handleLoad();
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Can't fetch data");
    }
    const data = await response.json();
    mainHeading.innerText = 'pagination';
    underline.style.opacity = 1;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchFollowers;
