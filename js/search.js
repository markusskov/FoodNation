const search = document.getElementById('searchbar');
const searchResults = document.getElementById('searchresults');

const linkSearch =
  'https://api.markusskov.tech/wp-json/wp/v2/posts?per_page=100&_embed';

const searchRecipes = async (searchText) => {
  const res = await fetch(linkSearch);
  const recipes = await res.json();

  let listOfRecipes = recipes.filter(({ title }) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return title.rendered.match(regex);
  });

  if (searchText.length === 0) {
    listOfRecipes = [];
    searchResults.innerHTML = '';
  }

  const html = listOfRecipes
    .map(
      ({ title, id }) => `
  <div class="search__result">
  <a class="search__text" href="details.html?id=${id}"><h4>${title.rendered}</h4></a>
  </div>
 `
    )
    .join('');

  searchResults.innerHTML = html;
  console.log(listOfRecipes);
};

search.addEventListener('input', () => searchRecipes(search.value));
