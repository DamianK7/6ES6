const products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Sofa", price: 500, category: "Furniture"},
    {name: "Fridge", price: 800, category: "Electronics"},
    {name: "Table", price: 250, category: "Furniture"},
    {name: "Smartphone", price: 900, category: "Electronics"},
    {name: "Doll", price: 50, category: "Toys"},
    {name: "Guitar", price: 400, category: "Instruments"}
];

const filterProducts = (filters = {}) => {
    const {category, minPrice = 0, maxPrice = Infinity} = filters;

    const filtered = products.filter(({category : productCategory, price}) =>
    (!category || productCategory === category) && price >= minPrice && price <= maxPrice);

    filtered.forEach(({name,price,category}) => {
        console.log(`Produkt: ${name}, Cena: ${price}, Kategoria: ${category}`);
    });

    if(filtered.length === 0){
        console.log("Brak produktów spełniających kryteria");
    }

};

filterProducts({maxPrice: 500, minPrice:250});
