// cart.js

// Add item to cart
function addToCart(item, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item} added to cart`);
}

// Display cart items
function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cartList");
  const totalPriceElement = document.getElementById("totalPrice");

  if (!cartList || !totalPriceElement) return; // ensure the element exists

  cartList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = "<li class='list-group-item'>Your cart is empty.</li>";
    totalPriceElement.innerText = "";
    return;
  }

  cart.forEach((product, index) => {
    total += product.price;
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${product.item} - ₹${product.price}
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  totalPriceElement.innerText = `Total: ₹${total}`;
}

// Remove item
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}
