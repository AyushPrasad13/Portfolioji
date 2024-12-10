document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = button.getAttribute("data-id");
            const product = {
                id: productId,
                name: `Product ${productId}`,
                price: 50 // Placeholder price for demonstration
            };

            cart.push(product);
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(listItem);
            total += item.price;
        });

        cartTotal.textContent = total;
    }

    document.getElementById("checkout").addEventListener("click", function() {
        alert("Thank you for shopping at GamerMart! Your total is: $" + cartTotal.textContent);
        cart = [];
        updateCart();
    });
});
