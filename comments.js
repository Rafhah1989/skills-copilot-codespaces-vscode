// Transformar um número decimal em um número binário

function decimalToBinary(decimal) {
    let binary = "";
    let number = decimal;
    
    while (number > 0) {
        binary = (number % 2) + binary;
        number = Math.floor(number / 2);
    }
    
    return binary;
}