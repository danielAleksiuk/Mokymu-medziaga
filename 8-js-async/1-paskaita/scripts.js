// console.log(1);
// console.log(2);


// setTimeout(() => {
//     console.log(3);
// }, 10000);

// console.log(4);
// console.log(5);


// for (let i = 1; i < 10; i++) {
//     // console.log(i)
//     setTimeout( () =>  {
//         console.log(i);
//     }, 1000);
// }

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(resposne => {
//         console.log(resposne)
//        return  resposne.json()
//     })
//     .then(data => console.log(data))
//     .then()
//     .then()
//     .then();


// let request = new XMLHttpRequest();

// // console.log(request);

// request.addEventListener('readystatechange', () =>{
//     if (request.readyState === 4) {
//         // console.log(request.responseText);
//         console.log(
//             JSON.parse(request.responseText)
//         )
//     }
// });

// request.open(
//     'GET',
//     'https://jsonplaceholder.typicode.com/todos'
// );
// request.send();

// let request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () =>{
//     if (request.readyState === 4) {
//         console.log(
//             JSON.parse(request.responseText)
//         )
//     }
// });

// request.open(
//     'GET',
//     'users.json'
// );
// request.send();



// const getTodos = (url) => {
//     return new Promise((resolve, reject) => {

//         let request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () =>{
//             if (request.readyState === 4 && request.status === 200) {
//                 resolve(
//                     JSON.parse(request.responseText)
//                 );
//             } else if (request.readyState === 4) {
//                 reject('error getting data')
//             }
//         });

//         request.open(
//             'GET',
//             url
//         );
//         request.send();
//     })
// };


// getTodos( 'https://jsonplaceholder.typicode.com/toworks')
// .then(data => {
//     console.log(data);
// }).catch (error => {
//     console.log(error)
// })




const getTodos = async () => {
    console.log('pries');
    let response =  await fetch('users.json')
    .then(resposne => {
       return  resposne.json()
    })
    console.log(response);
    console.log('po');
   return response;
}

getTodos().then(data => console.log(data))
.catch(() => {

});
