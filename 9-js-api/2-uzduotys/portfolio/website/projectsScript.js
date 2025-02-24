const BASE_URL = 'http://localhost:7788';

const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
}


window.addEventListener('DOMContentLoaded', async () => {
    let projects = await getData('/projects');
    console.log(projects)
});
