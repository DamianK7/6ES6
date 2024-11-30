class Cart{
    constructor(){
        this.products = [];
    } 

    addProduct(product){
        const existing = this.products.find(({name}) => name === product.name);
        if(existing){
            existing.quantity += product.quantity;
        } else{
            this.products.push(product);
        }
    }

    showCart(){
        if(!this.products.length)
            return console.log("Koszyk jest pusty.");

        this.products.forEach(({name, price, quantity}) =>
            console.log(`Produkt: ${name}, Cena: ${price} zł, Ilość: ${quantity}`)
        );

        const total = this.products.reduce((sum, {price, quantity}) => sum + price * quantity, 0);
        console.log(`Suma: ${total.toFixed(2)} zł`)
    }

}
const cart = new Cart();
cart.addProduct({name: "Tv", price: 2500, quantity: 1});
cart.addProduct({name: "Smartphone", price: 900, quantity: 2});
cart.showCart();

