document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const backButton = document.getElementById('back-button');
    const postsList = document.getElementById('posts-list');

    const loadPosts = () => {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        postsList.innerHTML = '';
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <small>by ${post.username}</small>
            `;
            postsList.appendChild(postDiv);
        });
    };

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleThemeButton.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    loadPosts();
});
