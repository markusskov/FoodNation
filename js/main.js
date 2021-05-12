const url = 'https://api.markusskov.tech/wp-json/wp/v2/posts?_embed';

const randomPostButton = document.querySelector('.cta-button');

// Fetch Images and post links
async function getFeaturedImages() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data;
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      content.innerHTML += `
      <div class="item__card">
      <a  href="details.html?id=${result[i].id}"><img class="item" src="${result[i]._embedded['wp:featuredmedia'][0].source_url}"/></a>
      <a class="card-text" href="details.html?id=${result[i].id}">${result[i].title.rendered}</a>
      <div>
      `;

      // Getting random id's endpoint when you click Random Dish button
      idOfPages = [result[i].id];
      const randomId = idOfPages[Math.floor(Math.random() * idOfPages.length)];
      console.log(randomId);
      randomPostButton.innerHTML = `<a class="cta-button" href="details.html?id=${randomId}">Random Dish</a>`;
    }
  } catch (error) {
    console.log(error);
  }
}
getFeaturedImages();

// Slider

const gap = 16;

const carousel = document.getElementById('carousel'),
  content = document.getElementById('content'),
  next = document.getElementById('next'),
  prev = document.getElementById('prev');

next.addEventListener('click', (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = 'flex';
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = 'none';
  }
});
prev.addEventListener('click', (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = 'none';
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = 'flex';
  }
});

let width = carousel.offsetWidth;
window.addEventListener('resize', (e) => (width = carousel.offsetWidth));
