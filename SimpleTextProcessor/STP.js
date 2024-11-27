const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{
let processedText = text;

if(uppercase){
    processedText = processedText.toUpperCase();
}
if(reverse){
    processedText = processedText.split('').reverse().join('')
}

console.log(`Zmieniony tekst: ${processedText}`)
}
processText("Witam", {uppercase:true, reverse:true})