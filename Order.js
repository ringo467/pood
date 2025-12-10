export class Order{
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