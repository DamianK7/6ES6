const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{

    let processedText = text;

if(uppercase){
    processedText = processedText.toUpperCase();
}

if(reverse){
    processedText = [...processedText].reverse().join('')
}

if(removeSpecialChars){
    processedText = processedText.replace(/[^a-zA-Z0-9 ]/g, '')
}

console.log(`Zmieniony tekst: ${processedText}`)
}

processText("Dzień dobry", {uppercase:true, reverse:true, removeSpecialChars:true})