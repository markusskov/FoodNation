const url =
  'https://api.markusskov.tech/wp-json/wp/v2/posts?per_page=20&_embed';

const container = document.getElementById('recipes');

async function getRecipes() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data;
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      container.innerHTML += `
    <div class="cards">
        <div class="card">
            <a href="details.html?id=${result[i].id}"><img class="recipe-img" src="${result[i]._embedded['wp:featuredmedia'][0].source_url}"/></a>
            <div class="space></div>
            <a class="card-text" href="details.html?id=${result[i].id}">${result[i].title.rendered}</a>
        </div>
    </div>
        `;
    }
  } catch (error) {
    console.log(error);
  }
}
getRecipes();
