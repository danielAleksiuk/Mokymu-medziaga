const {maistoProduktai, duokMasyva, fakeAPI, atmetantiFunkcija} = require('./examplesTesting');

// describe('maistoProduktai:', () => {
//     it('yra pienas reiksme', () => {
//         expect(maistoProduktai).toContain('pienas');
//     });
// });

describe('duokMasyva:', () => {
    afterEach(() => {
        // restore the spy created with spyOn
        jest.restoreAllMocks();
});

    it('teisingai grazina masyvo reiksmes', () => {
        expect(duokMasyva()).toEqual(['pienas', 'duona', 'vanduo'])
    });
    
    it('funkcija bv iskviesta', () => {
        // const fn = jest.fn(() => true)
        const  examplesTesting = require('./examplesTesting')
        const spy = jest.spyOn(examplesTesting, 'duokMasyva');
        const data = examplesTesting.duokMasyva();

        expect(spy).toHaveBeenCalled();
    });
});

// describe('fakeAPI:', () => {
//     test('grazina ats iki 2 sek', async () => {
//         const result = await fakeAPI(1000);
//         expect(result).toBe('data data data');
//     });
    
//     test('ismeta klaida kai ats grazina ilgiau nei 2 sek', async() =>{
//         try {
//           await fakeAPI(2500);
//         } catch (error) {
//             expect(error).toBe('no data');
//         }
//     });
// });

