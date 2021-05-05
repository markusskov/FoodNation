const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);

const url = 'https://api.markusskov.tech/wp-json/wp/v2/posts/' + id + '?_embed';
const recipePost = document.getElementById('wordpress-blog-post');

async function singleRecipe() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data;
    console.log(result);

    recipePost.innerHTML = `
   <h1 class="recipe-h1"> ${result.title.rendered} </h1>
   <img class="image" src="${result._embedded['wp:featuredmedia'][0].source_url}"/>
    ${result.content.rendered}`;
  } catch (error) {
    console.log(error);
  }
}
singleRecipe();
