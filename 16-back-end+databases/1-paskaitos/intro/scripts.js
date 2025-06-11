// console.log('veikia')

// narsykleje - window
// node - global

// for (let i = 5; i >= 1; i--) {
//   setTimeout(() => {
//     console.log(`liko ${i} sec`);
//     if (i === 1) {
//       console.log("tavo laikas baigesi");
//     }
//   }, (6 - i) * 1000);
// }

// global.setTimeout(() => {
//     console.log('timeout veikia')
// }, 1000);

// let laikas = 5;

// global.setInterval(() => {
//     console.log('sekunde')
// }, 1000);


// let laikas = 5;

// const timer = global.setInterval(() => {
//     if (laikas > 0) {
//         console.log(`liko ${laikas} sekundziu`)
//         --laikas
//     } else if (laikas === 0) {
//         console.log(`laikas baigesi`)
//         clearInterval(timer)
//     }
// }, 1000);

// laikas = 5;

// let laikoIntervalas = setInterval(() => {
//   if (laikas > 0) {
//     console.log(laikas);
//     // } 
//     // else if (laikas === 1) {
//     //     console.log(1);
//   } else {
//     console.log("laikas baigesi");
//     clearInterval(laikoIntervalas);
//   }
//   laikas--;
// }, 1000);


// let laikas = 5;
// let intervalas = true;
// const taimeris = global.setInterval(() => {
//     console.log('aaa')
//       if (!intervalas)
//          return;
//       console.log(`liko ${laikas} sec`);
//       laikas--;
//       if(laikas === 0) {
//         console.log('laikas baigesi')
//         clearInterval(taimeris)
//       }
// }, 1000);

// const data = require('./isorinis');
// console.log(data);
// console.log(data.API_URL)

const {duomenys, API_URL, funkcijaPaprasta} = require('./isorinis');
console.log(duomenys);
console.log(API_URL);

funkcijaPaprasta();


const fs = require('fs');


// delete file unlink
// fs.unlink('./pvz.pdf', (error) => {
//     console.log(error);
//     console.log('failas istrintas')
// });

// fs.writeFile('./pvz.csv', 'pvz', () => {
//     console.log('failo turinys pakeistas')
// });

// fs.readFile('./pvz.txt', (error, data) => {
//     console.log(data)
//     console.log(data.toString());
// })

// fs.mkdir('./mano-pirmas-folderiukas', (error) => {
//     console.log(error)
//     console.log('sukuras folderis')
// });

// if (fs.existsSync('./mano-pirmas-folderiukas')) {
//     console.log('folderis sukurtas');

//     fs.rmdir('./mano-pirmas-folderiukas', (error) => {
//         console.error(error);
//         console.log('folderi istrinem');
//     });
// } else {
//     fs.mkdir('./mano-pirmas-folderiukas', (error) => {
//     console.log(error)
//     console.log('sukuras folderis')
// });
// }


// const readStream = fs.createReadStream('./pvz.txt');

// readStream.on('data', (chunk) => {
//     console.log('-------------------')
//     console.log(chunk)
//     console.log('-------------------')
// })

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-type', 'text/html');
    res.write('<h1>mano pirmasis requestas</h1>');
    const a = 5 + 4;
    res.write(a.toString())
    res.write('<p>mano pirmasis requestas su node.js</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('waiting for requests');
})