
test('adds 14 + 9 to equal 23', () => {
    const { sum } = require('./app.js');
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})
test("one dollar should be 144 yen", function(){
    const { fromDollarToYen} = require('./app.js')
    const yen = fromDollarToYen(3.5)
    const expected = 3.5 * 144;
    expect(fromDollarToYen(3.5)).toBe(504);
})
test("one yen should be 0.0055 pound", function(){
    const { fromYenToPound} = require('./app.js')
    const pound = fromYenToPound(3.5)
    const expected = 3.5 * 0.0055;
    expect(pound).toBe(0.01925)
})
