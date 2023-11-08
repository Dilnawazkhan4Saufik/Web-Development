const scriptURL =
  'https://script.google.com/macros/s/AKfycbxderkJLS-VHroi6W87hCZ08MTRe6Q7egVt5pCZNrZpzoIUCQ8BUA8_EVbZDew2qDEF7w/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Thank you for subscribing!';
      setTimeout(() => {
        msg.innerHTML = '';
      }, 2500);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
