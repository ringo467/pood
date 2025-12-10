export class Cart{

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