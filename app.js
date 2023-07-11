const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar *144;
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0055;
    return valueInPound;
}

const sum = function(a,b)  {
    return a + b;
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
