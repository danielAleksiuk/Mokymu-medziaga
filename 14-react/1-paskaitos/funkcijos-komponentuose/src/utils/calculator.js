export const PI = 3.14;

export const suma = (a , b) => {
    return a + b;
}

export const averageArray = (mas) => {
    return (mas.reduce((suma, skaicius) => suma + skaicius, 0)) / mas.length;
}
