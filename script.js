function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.getElementById("cart-items");
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>£${item.price}</span>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
