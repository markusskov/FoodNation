const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);

const url = 'https://api.markusskov.tech/wp-json/wp/v2/posts/' + id + '?_embed';
const title = document.querySelector('.recipe-h1');
const img = document.querySelector('.targetImgDiv');
const recipePost = document.getElementById('wordpress-blog-post');
const modalContent = document.querySelector('.targetModal-content');
const caption = document.getElementById('caption');

async function singleRecipe() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data;
    console.log(result);

    title.innerHTML = `${result.title.rendered}`;
    img.innerHTML = `<img id="myImg" src="${result._embedded['wp:featuredmedia'][0].source_url}" alt="${result.title.rendered}"/>`;
    modalContent.innerHTML = `<img class="modal-content" id="img01" src="${result._embedded['wp:featuredmedia'][0].source_url}" alt="${result.title.rendered}"/>`;
    caption.innerHTML = `${result.title.rendered}`;
    recipePost.innerHTML = `
   
    ${result.content.rendered}`;
  } catch (error) {
    console.log(error);
  }
}
singleRecipe();

//Modal
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
img.onclick = function () {
  modal.style.display = 'block';
};

const span = document.getElementsByClassName('close')[0];
span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
