import { Product } from "./ÜL2/Product.js";
import { Cart } from "./ÜL2/Cart.js";
import { Customer } from "./ÜL2/Customer.js";
import { navigate } from "./router.js";

const products = [
    new Product(1, "Sülearvuti", 999.99, "Elektroonika"),
    new Product(2, "Telefon", 599.99, "Elektroonika"),
    new Product(3, "Tahvelarvuti", 299.99, "Elektroonika")
];

cartConstructor.addProduct(products[0], products[2]);
customerConstructor.toggleFavorites(products[0]);

const initApp = async () => {
    const favoritesButton = document.getElementById("favorites-button");
    favoritesButton.onclick = () => navigate("favorites");

    const cartButton = document.getElementById("cart-button");
    homeButton.onclick = () => navigate("cart");
    
    const homeButton = document.getElementById("home-button")
    homeButton.onclick = () => initApp();

    displayAllProductsView(products);
    displayProductDetailView(products[1]);
    displayCartView();
    displayFavoritesView();
}

const customer = new Customer("Alice");
customer.placeOrder(cart);
customer.printOrderHistory();



/*console.log(Product.discountedPrice(laptop.price, 10)); // 10% allahindlus

const cart = new Cart();
cart.addProduct(laptop, 2);
console.log(cart.calculateTotal()); // Kokku hind

console.log(cart.totalItems); // Kokku tooteid ostukorvis*/
