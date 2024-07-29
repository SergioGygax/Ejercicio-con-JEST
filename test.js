const { dollarToYen } = require('./app.js');

test('Convierte 1 USD a JPY para que de 156.88', () => {
    let conversion = dollarToYen(1);
    expect(conversion).toBe(156.88 + ' JPY');
});

const { euroToDollar } = require('./app.js');

test('Convierte 1 EUR a USD para que de 1.07', () => {
    let conversion = euroToDollar(1);
    expect(conversion).toBe(1.07 + ' USD');
});

const { yenToPound } = require('./app.js');

test('Convierte 1 JPY a GBP para que de 0.0050', () => {
    let conversion = yenToPound(1);
    expect(conversion).toBe(0.0050 + ' GBP');
});
