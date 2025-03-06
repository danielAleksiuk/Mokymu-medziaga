function getName() {
    return {
        name: 'Jonas'
    };
}

function getNameAndAge(name, age) {
    return {
        name,
        age
    };
}

module.exports = [getName, getNameAndAge];