// Sample product data (you can replace this with your actual product data)
const product = {
    name: "Best product",
    image: "image/product1.jpg",
    price: 55000.00,
};

// Function to get the cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Function to update the cart in localStorage
function updateCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to add a product to the cart
function addToCart() {
    const selectedSize = document.querySelector("select").value;
    const quantity = parseInt(document.querySelector("input[type='number']").value);

    // Check if size is selected
    if (selectedSize === "Select Size") {
        alert("Please select a size.");
        return;
    }

    // Create or update the cart item
    const cartItem = {
        name: product.name,
        image: product.image,
        size: selectedSize,
        price: product.price,
        quantity: quantity,
    };

    // Get the current cart from localStorage
    const cart = getCart();

    // Check if the item already exists in the cart based on the size
    const existingCartItemIndex = cart.findIndex((item) => item.size === selectedSize);

    if (existingCartItemIndex !== -1) {
        // If the item already exists, update the quantity
        cart[existingCartItemIndex].quantity += quantity;
    } else {
        // If the item doesn't exist, add it to the cart
        cart.push(cartItem);
    }

    // Update the cart in localStorage
    updateCart(cart);

    // Optionally, you can redirect to the cart page
    window.location.href = "cart.html";
}






// Add an event listener to the "Add To Cart" button
document.getElementById("addToCart").addEventListener("click", addToCart);
// Function to get the cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Function to display cart items in cart.html
function displayCart() {
    const cartItems = getCart();
    const cartItemsContainer = document.getElementById("cart-items");
    let total = 0;

    // Clear the cart items container
    cartItemsContainer.innerHTML = "";

    // Loop through cart items and display them
    cartItems.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" width="50"></td>
            <td>${item.name}</td>
            <td>${item.size}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartItemsContainer.appendChild(row);

        // Calculate total price
        total += item.price * item.quantity;
    });

    // Display the total in cart-total span
    document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Call the displayCart function when the cart.html page loads
window.addEventListener("load", displayCart);
