const KEY = '23292870-e9e1fc8f4fc8bd7151266ea82';

async function fetchImages({ query, page }) {
  const respons = await fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  const parsedRespons = await respons.json();
  return parsedRespons;
}

export default fetchImages;
