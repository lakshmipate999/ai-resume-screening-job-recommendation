// Cart Counter
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;

    alert("Product added to cart!");
}

// Search Functionality
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// Contact Form
const contactButton = document.querySelector(".contact button");

contactButton.addEventListener("click", function () {
    const name = document.querySelector('.contact input[type="text"]').value;
    const email = document.querySelector('.contact input[type="email"]').value;
    const message = document.querySelector('.contact textarea').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form
    document.querySelector('.contact input[type="text"]').value = "";
    document.querySelector('.contact input[type="email"]').value = "";
    document.querySelector('.contact textarea').value = "";
});