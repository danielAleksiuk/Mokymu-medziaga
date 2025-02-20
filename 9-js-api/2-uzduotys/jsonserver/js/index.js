window.addEventListener('DOMContentLoaded', () => renderPosts())

const container = document.querySelector('.irasai')
const searchForm = document.querySelector('.search');

const renderPosts = async (search) => {
    let uri = 'http://localhost:3000/posts';

    if (search) {
        uri += `?title=${search}`;
    }

    const res = await fetch(uri)
    const posts = await res.json()

    let template = ''
    posts.forEach(post => {
            template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} Likes</small></p>
                <p>${post.body.slice(0, 200)}</p>
                <a href="details.html?id=${post.id}">Plačiau</a>
            </div>
            `
    });

    container.innerHTML = template;
};


searchForm.addEventListener('submit', (e) => {
   e.preventDefault();
   renderPosts(searchForm.term.value.trim());
})