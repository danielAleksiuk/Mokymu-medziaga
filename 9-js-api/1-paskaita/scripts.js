
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => { console.log(response) })
    .catch(error => console.log(error));


let newTask = {
    userID: 1,
    id: 125,
    title: 'mano nauja uzduotis',
    body: 'uzsakyti pica'
};

axios.post('https://jsonplaceholder.typicode.com/posts', newTask)
    .then(response => { console.log(response) })
    .catch(error => console.log(error));

    
axios.get('https://jsonplaceholder.typicode.com/todos/125')
    .then(response => { console.log(response) })
    .catch(error => console.log(error));