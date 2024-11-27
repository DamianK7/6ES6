class Calculator{
    add({a,b}){
        const result = a + b;
        console.log(`Wynik dodawania: ${a} + ${b} = ${result}`);
    }

    substruct({a,b}){
        const result = a - b;
        console.log(`Wynik odejmowania: ${a} - ${b} = ${result}`);
    }

    multiply({a,b}){
        const result = a * b;
        console.log(`Wynik mnożenia: ${a} * ${b} = ${result}`);
    }
    
}
const calculator = new Calculator();
calculator.add({a : 5, b : 10});
calculator.substruct({a : 9, b: 7});
calculator.multiply({a : 6, b : 4})