const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

let imgBox = document.getElementById('imgBox');
let qrImgBox = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');

function generateQRCode() {
  if (qrText.value.length > 0) {
    qrImgBox.src = apiUrl + qrText.value;
    qrText.value = '';
    imgBox.classList.add('show-img');
  } else {
    qrImgBox.src = '';

    qrText.classList.add('error');

    setTimeout(() => {
      qrText.classList.remove('error');
    }, 1000);
  }
}
