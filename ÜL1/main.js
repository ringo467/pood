

class Product{

    constructor(id, title, price, category){
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
    }

    describe(){
       return `${this.title} - ${this.price} € (${this.category})`;
    };

    static discountedPrice(price, discount){
        return (price - price * discount / 100).toFixed(2);
    }
}


const laptop = new Product(1, "Sülearvuti", 999.99, "Elektroonika");
console.log(laptop.describe());

console.log(Product.discountedPrice(laptop.price, 10)); // 10% allahindlus


class Cart{

    constructor() {
        
        this.items = [];
    }

    addProduct(product, quantity = 1) {
        
        const existing = this.items.find(item => item.product.id === product.id);

        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    calculateTotal() {
        return this.items.reduce((sum, item) => {
            return sum + item.product.price * item.quantity;
        }, 0);
    }

   
    get totalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
}


const cart = new Cart();
cart.addProduct(laptop, 2);
console.log(cart.calculateTotal()); // Kokku hind

console.log(cart.totalItems); // Kokku tooteid ostukorvis


class Order{
        constructor(cart) {
        this.orderDate = new Date();
        this.cart = cart;
    }

    printOrder() {
        console.log("Kuupäev:", this.orderDate.toLocaleString());
        console.log("\nTooted ostukorvis:");

        if (this.cart.items.length === 0) {
            console.log("Ostukorv on tühi.");
        } else {
            this.cart.items.forEach(item => {
                console.log(`- ${item.product.title} x ${item.quantity} = ${item.product.price * item.quantity} €`);
            });
        }

        console.log("Kokku:", this.cart.calculateTotal() + " €");
    }

}

class Customer {
    constructor(name) {
        this.name = name;
        this.orderHistory = [];
    }

    placeOrder(cart) {
        const newOrder = new Order(cart);
        this.orderHistory.push(newOrder);
        return newOrder;
    }

    printOrderHistory() {
        console.log(`${this.name} tellimuse ajalugu`);

        if (this.orderHistory.length === 0) {
            console.log("Tellimusi ei ole");
            return;
        }

        this.orderHistory.forEach((order, index) => {
            console.log(`\nTellimus #${index + 1}`);
            console.log("Kuupäev:", order.orderDate.toLocaleString());
            console.log("Kogusumma:", order.cart.calculateTotal() + " €");
        });

        
    }
}


const customer = new Customer("Alice");
customer.placeOrder(cart);
customer.printOrderHistory();
