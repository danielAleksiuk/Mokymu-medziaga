const [apskritimoPlotas, palindrome] = require('./sprendimai');


describe('1 uzd:', () => {
    test('ar apskritimo plotas teisingai paskaiciuotas', () => {
        // expect(apskritimoPlotas(2)).toBe(
        //     12.566370614359172953850573533118
        // );
        expect(apskritimoPlotas(2)).toBeCloseTo(12.57, 2);
    });
})
describe('2 uzd:', () => {
    test('zodis yra polindromas', () => {
        const result = palindrome('eme');
        expect(result).toBe(true);
    });
    test('zodis nera polindromas', () => {
        expect(palindrome('uzduotys')).toBe(false);
    })
})
describe('3 uzd:', () => {
    
})
describe('4 uzd:', () => {
    
})
describe('5 uzd:', () => {
    
})
describe('6 uzd:', () => {
    
})