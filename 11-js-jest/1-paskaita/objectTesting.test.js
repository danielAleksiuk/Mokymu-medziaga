const [getName, getNameAndAge] = require('./objectTesting');

test('getName grazina varda - Jonas', () => {
    expect(getName()).toEqual(
        {
            name: 'Jonas'
        }
    );
});

test('getNameAndAge grazina varda - Mantas ir amzius - 20', () => {
    expect(getNameAndAge('Mantas', 20)).toEqual({
        name: 'Mantas', age: 20
    });
});