let bagItems = [];

onLoad();

function onLoad() {
  let bagItemString = localStorage.getItem('bagItems');
  bagItems = bagItemString ? JSON.parse(bagItemString) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function displayBagIcon() {
  const BagItemCount = document.querySelector('.bag-items');
  if (bagItems.length > 0) {
    BagItemCount.style.visibility = 'visible';
    BagItemCount.innerText = bagItems.length;
  } else {
    BagItemCount.style.visibility = 'hidden';
  }
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayItemsOnHomePage() {
  const itemsContainer = document.querySelector('.items-container');
  if (!itemsContainer) return;
  let innerHTML = '';
  items.forEach((item) => {
    innerHTML += ` <div class="item-container">
        <img class='item-img' src=${item.image} alt="item image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}k
        </div>
        <div class="company-name">
            ${item.company}
        </div>
    <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">RS ${item.current_price}</span>
            <span class="original-price">RS ${item.original_price}</span>
            <span class="discount">
                (${item.discount_percentage}% OFF)
            </span>
        </div>
        <button onclick="addToBag(${item.id})" class="btn-add-bag">Add to Cart</button>
    </div>`;
  });
  itemsContainer.innerHTML = innerHTML;
}
