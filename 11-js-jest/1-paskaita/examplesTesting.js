const maistoProduktai = ['pienas', 'duona', 'vanduo'];

function duokMasyva() {
    return ['pienas', 'duona', 'vanduo'];
}

async function fakeAPI(timeout) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if (timeout > 2000) {
                reject('no data')
            }

            resolve('data data data')
        }, timeout);
     })
}

// const atmetantiFunkcija = async () => {
//     return Promise.reject(new Error('bad request'));
// }

module.exports = {maistoProduktai, duokMasyva, fakeAPI};