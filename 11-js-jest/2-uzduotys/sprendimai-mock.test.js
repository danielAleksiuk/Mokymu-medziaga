const app = require('./sprendimai-mock');

describe('1 uzd:', () => {
    test('mock used', () => {
        const mock = jest.fn().mockReturnValue(5);
        app.getThirdNumber = mock;
        const result = app.skaiciuokSuma(2, 2);
        // expect(mock).toHaveBeenCalled();
        // expect(mock).toHaveBeenCalledWith(5/);
        expect(result).toBe(7);
    })
});
describe('2 uzd:', () => {
    
});
describe('3 uzd:', () => {
});