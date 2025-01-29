console.log('================================');
console.log('====   switch uzduotys      ====');
console.log('====   1 uzduotis:          ====');

let choice = 4
switch (choice) {
    case 1: 
        console.log('Jus laimejote vandens')
        break;
    case 2:
        console.log('Jus laimejote limonada')
        break;
    case 3:
        console.log('Jus laimejote arbata')
        break;
    case 4:
        console.log('Jus laimejote kava')
        break;
    default:
        console.log ('Error')
};

console.log('====   2 uzduotis:          ====');

let numberOne = 2
let numberTwo = 3
let numberThree = 4

switch (numberOne) {
    case 1: 
        console.log('visų trijų skaičių suma:', numberOne + numberTwo + numberThree);
        break
    case 2:
        console.log('antro ir trečio skaičių sandauga:', numberTwo * numberThree);
        break;
    case 3: 
        console.log('pirmas skaičius kvadratu:', Math.pow(numberOne, 2));
        break;
    default:
        console.log ('Error')
        
};

console.log('====   3 uzduotis:          ====');

let errorCode = 'A123B';

switch (errorCode) {
    case 'A123B':
        console.log ('Network error');
        break;
    case 'B159C':
        console.log ('Wrong data');
        break;
    case 'C753D':
        console.log ('Memory error');
        break;
    default:
        console.log('General Error');
};


console.log('================================');