const url = 'https://api.markusskov.tech/wp-json/wp/v2/posts?_embed';

const container = document.getElementById('card-slider');

const sliderImage = document.querySelector('.splide__slide__container');
// Link for Images
// ${result[i]._embedded['wp:featuredmedia'][0].source_url}

async function getFeaturedImages() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data;
    console.log(result);

    for (let i = 0; i < result.length; i++) {
      sliderImage.innerHTML = `<img src="${result[i]._embedded['wp:featuredmedia'][0].source_url}">`;
    }
  } catch (error) {
    console.log(error);
  }
}
getFeaturedImages();

// Splide
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#card-slider', {
    perPage: 3,
    breakpoints: {
      600: {
        perPage: 1,
      },
    },
  }).mount();
});
