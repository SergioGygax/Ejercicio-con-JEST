//Los valores de conversión están 
//actualizados y no son los del ejemplo.

const dollarToYen = (amount) => {
    return amount * 156.88 + ' JPY'
};

console.log(dollarToYen(1));


const euroToDollar = (amount) => {
    return amount * 1.07 + ' USD'
};

console.log(euroToDollar(1));

const yenToPound = (amount) => {
    return amount * 0.0050 + ' GBP'
};

console.log(yenToPound(1));


module.exports = { dollarToYen, euroToDollar, yenToPound };