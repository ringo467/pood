export class Customer {
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
            console.log(`Tellimus #${index + 1}`);
            console.log("Kuupäev:", order.orderDate.toLocaleString());
            console.log("Kogusumma:", order.cart.calculateTotal() + " €");
        });

        
    }
}