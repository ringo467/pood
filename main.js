

class Product{

    constructor(id, title, price, category){
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
    }

    describe(){
        return this.title + this.price + this.category;
    };

    static discountedPrice(price, discount){
        return (price - price * discount / 100).toFixed(2);
    }
}

class Cart{

    constructor(addProduct, removeProduct, calculateTotal){
        this.addProduct = addProduct;
        this.removeProduct = removeProduct;
        this.calculateTotal = calculateTotal;
    }
}

class Order{
    constructor(orderDate, cart){
        this.orderDate = orderDate;
        this.cart = cart;
    }
}




const laptop = new Product(1, "Sülearvuti", 999,99, "Elektroonika");
console.log(laptop.describe());

console.log(Product.discountedPrice(laptop.price, 10)); // 10% allahindlus
const cart = new Cart();
cart.addProduct(laptop, 2);