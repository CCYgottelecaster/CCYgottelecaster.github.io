//Constructor of items.
function Item(name, size, color, quantity, price) {
  this.name = name;
  this.size = size;
  this.color = color;
  this.quantity = quantity;
  this.price = price;
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


//Adding event listener to the cart button in the detail page.
var button = document.getElementsByClassName('cartButton')[0];
button.addEventListener("click", addToCart);
//Function for adding the item to the shopping cart.
function addToCart(event) {
  //Gathering the shopping item information
  var name = document.getElementsByClassName('shop-item-title')[0].textContent;
  var price = document.getElementsByClassName('shop-item-price')[0].textContent;
  var size = document.getElementById("size").value;
  var color = document.getElementById("color").value;
  var quantity = document.getElementById("quantity").value;
  //Solve the problem of negative quantity
  if (!(quantity > 0)) {
    quantity = 0;
  }
  //Constructing the shopping item object
  var addingItem = new Item(name, size, color, quantity, price);
  var num = document.getElementsByClassName('badge')[0].textContent;
  //Setting the limitation of the number of items in shopping cart
  if (num < 9) {
    document.getElementsByClassName('badge')[0].textContent = parseInt(num) + 1;
  } else {
      alert("Your shopping cart is full!");
  }
}

