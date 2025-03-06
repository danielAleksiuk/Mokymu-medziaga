const [suma, atimti, daugyba] = require('./functionTesting');


it('test su IT reiksme', () => {
    expect(4).toBe(4)
});

test('funckija suma grazina 5', () => {
    expect(suma(2,3)).toBe(5);
});

test('funckija suma teisingai skaiciuoja', () => {
    expect(suma(8,3)).not.toBe(4);
});

test('funkcija atimti su parametrais - 8 ir 10 grazina -2', () => {
    expect(atimti(8, 10)).toBe(-2);
});

test('funkcija daugyba su parametrais - 10 ir 8 grazina 80', () => {
    expect(daugyba(10, 8)).toBe(80);
});