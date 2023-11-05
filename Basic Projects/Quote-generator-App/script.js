const apiUrl = 'https://api.quotable.io/random';
const twitterShareLink = 'https://twitter.com/intent/tweet?text=';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

async function getQuote() {
  const response = await fetch(apiUrl);
  var data = await response.json();
  quoteElement.innerHTML = data.content;
  authorElement.innerHTML = data.author;
}

function shareOnTwitter() {
  window.open(
    `${twitterShareLink}${quoteElement.innerHTML} ----by ${author.innerHTML}`,
    'Tweet Window',
    'width=600',
    'height=300'
  );
}

getQuote();
