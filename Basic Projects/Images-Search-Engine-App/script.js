const Unsplash_Access_Key = 'xTsJyaR_rt8tkD-v6LZSe8cDwprQy5vTrMgn8rDwbw0';
const Unsplash_Secret_Key = '5NUIQO5jD0YLCf3oyfMT_3wmlMVtN8_oSAYqYUBNQTs';

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = '';
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Unsplash_Access_Key}&per_page=12`;

  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    if (page === 1) {
      searchResult.innerHTML = '';
    }
    const results = data.results;
    results.map((result) => {
      const image = document.createElement('img');
      image.src = result.urls.small;
      const imageLink = document.createElement('a');
      imageLink.href = result.urls.full;
      imageLink.target = 'blank';
      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
    });
    showMoreBtn.style.display = 'block';
  }
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener('click', () => {
  page += 1;
  searchImage();
});
