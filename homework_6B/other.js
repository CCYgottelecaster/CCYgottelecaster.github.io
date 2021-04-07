//https://github.com/WebDevSimplified/Introduction-to-Web-Dev
//elopment/tree/master/Introduction%20to%20JavaScript/Lesson%201
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

//Function for loading the page.
function ready() {
  updateBadgeItem();
  var removeCartItemButtons = document.getElementsByClassName('btn-remove');
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName('quantity')
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  //Adding event listener to the cart button in the detail page.
  var addToCartButtons = document.getElementsByClassName('cartButton');
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addToCartClicked);
  }
}

//Constructor of shopping items.
function Item(name, price, imageSrc) {
  this.name = name;
  this.price = price;
  this.imageSrc = imageSrc;
}

//Function for making sure the quantity is a positive integer.
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

//Function for removing.
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

//Function for changing the option in the select tag to change the image.
function show() {
  var size = document.getElementById("size").value;
  var color = document.getElementById("color").value;
  if (size == "large") {
    if (color == "yellow") {
      document.getElementById("headimg").src = "./img/backpack1.png";
    } else if (color == "green") {
      document.getElementById("headimg").src = "./img/packGreenLarge.png";
    } else if (color == "orange") {
      document.getElementById("headimg").src = "./img/packOrangeLarge.png";
    } else if (color == "red") {
      document.getElementById("headimg").src = "./img/packRedLarge.png";
    } else {
      document.getElementById("headimg").src = "./img/packCyanLarge.png";
    }
  } else if (size == "medium") {
    if (color == "yellow") {
      document.getElementById("headimg").src = "./img/backpackMedium.png";
    } else if (color == "green") {
      document.getElementById("headimg").src = "./img/packGreenMedium.png";
    } else if (color == "orange") {
      document.getElementById("headimg").src = "./img/packOrangeMedium.png";
    } else if (color == "red") {
      document.getElementById("headimg").src = "./img/packRedMedium.png";
    } else {
      document.getElementById("headimg").src = "./img/packCyanMedium.png";
    }
  } else {
    if (color == "yellow") {
      document.getElementById("headimg").src = "./img/backpackSmall.png";
    } else if (color == "green") {
      document.getElementById("headimg").src = "./img/packGreenSmall.png";
    } else if (color == "orange") {
      document.getElementById("headimg").src = "./img/packOrangeSmall.png";
    } else if (color == "red") {
      document.getElementById("headimg").src = "./img/packRedSmall.png";
    } else {
      document.getElementById("headimg").src = "./img/packCyanSmall.png";
    }
  }
}

//Function for add button listener.
function addToCartClicked(event) {
  var thisButton = event.target;
  var shopItem = thisButton.parentElement.parentElement.parentElement;

  //Gathering the shopping item information
  var name = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  var imageSrc = shopItem.getElementsByClassName('p-img')[0].src;
  
  addItemToCart(name, price, imageSrc);
}

//Function for adding the item to the shopping cart.
function addItemToCart(title, price, imageSrc) {
  var addingItem = new Item(title, price, imageSrc);
  if (localStorage.hasOwnProperty(title)) {
      alert('This item is already in the cart');
      return;
  }
  localStorage.setItem(`${title}`, JSON.stringify(addingItem));

  //Setting the limitation of the number of items in shopping cart
  if (localStorage.length > 8) {
    alert("Your shopping cart is full!");
    return;
  }
  updateBadgeItem();
}
//Function for updating counter on the badge.
function updateBadgeItem() {
  document.getElementsByClassName('badge')[0].textContent = localStorage.length;
}