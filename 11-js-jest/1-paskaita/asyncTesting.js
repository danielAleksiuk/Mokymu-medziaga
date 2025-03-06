function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data loaded'), 1000)
    });
}

module.exports = fetchData;