import { Product } from "./ÜL2/Product.js";
import { Cart } from "./ÜL2/Cart.js";
import { Customer } from "./ÜL2/Customer.js";

const laptop = new Product(1, "Sülearvuti", 999.99, "Elektroonika");
console.log(laptop.describe());

console.log(Product.discountedPrice(laptop.price, 10)); // 10% allahindlus

const cart = new Cart();
cart.addProduct(laptop, 2);
console.log(cart.calculateTotal()); // Kokku hind

console.log(cart.totalItems); // Kokku tooteid ostukorvis

const customer = new Customer("Alice");
customer.placeOrder(cart);
customer.printOrderHistory();