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
    
    divide({a,b}){
        if(b===0){
            console.log("Nie można dzielić przez 0");
            return;
        }
        let result = a / b;
        console.log(`Wynik dzielenia: ${a} : ${b} = ${result}`);
    }
}

const calculator = new Calculator();

calculator.add({a : 5, b : 10});
calculator.substruct({a : 9, b: 7});
calculator.multiply({a : 6, b : 4});
calculator.divide({a : 7, b : 2});