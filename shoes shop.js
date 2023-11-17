 // JavaScript code to handle showing the "Add to Cart" button
 function showAddToCartButton(element) {
    // Hide all "Add to Cart" buttons
    var buttons = document.querySelectorAll('.add-to-cart-button');
    buttons.forEach(function(btn) {
        btn.style.display = 'none';
    });

    // Show the "Add to Cart" button for the selected product
    var addToCartButton = element.querySelector('.add-to-cart-button');
    if (addToCartButton) {
        addToCartButton.style.display = 'block';
    }
}

// Function to handle adding the product to the cart
function addToCart() {
    // Add your logic here for adding the selected product to the cart
    alert('Product added to cart!');
}

function logout() {
    // Implement your logout logic here
    alert('User logged out!');
}
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
