let toastBox = document.getElementById('toastBox');

let successMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully Submitted!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix the error';
let warningMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Oops! Something went wrong';

function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;

  toastBox.appendChild(toast);

  if (msg.includes('error')) {
    toast.classList.add('error');
  }

  if (msg.includes('wrong')) {
    toast.classList.add('wrong');
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
