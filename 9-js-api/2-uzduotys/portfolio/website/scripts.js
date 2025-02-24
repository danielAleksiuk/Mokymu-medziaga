const BASE_URL = 'http://localhost:7788';

const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
}

const generateProjectsHTML = (projects) => {
    return projects.map( project => {
        return `
            <div class="main-block-projects-card">
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <div class="main-block-tags">
                    ${project.technologies.map(item => `<p>${item}</p>`).join('')}
                </div>
                <button>Ziureti</button>
            </div>
        `;
    }).join('');
}

const generateWorkExperienceHTML = (workExp) => {
    return '<div></div>';
}


window.addEventListener('DOMContentLoaded', async () => {
    let projects = await getData('/projects/latest/3');
    let workExp = await getData('/work-experience/latest/2')

    document.querySelector('.main-block-projects').innerHTML = generateProjectsHTML(projects);
    document.querySelector('.main-block-jobs-cards').innerHTML = generateWorkExperienceHTML(workExp);
});
