let imgBox = document.querySelector('.img-box');
let imgWrap = document.querySelector('.img-wrap');
let originalImg = document.getElementById('originalImg');
let line = document.getElementById('line');

let leftSpace = imgBox.offsetLeft;

originalImg.style.width = imgBox.offsetWidth + 'px';

imgBox.onmousemove = function (e) {
  let boxWidth = e.pageX - leftSpace;

  imgWrap.style.width = boxWidth + 'px';
  line.style.left = boxWidth + 'px';
};
