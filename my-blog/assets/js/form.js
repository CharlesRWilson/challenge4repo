document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blog-form');
    const formError = document.getElementById('form-error');

    blogForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = blogForm.username.value.trim();
        const title = blogForm.title.value.trim();
        const content = blogForm.content.value.trim();

        if (username && title && content) {
            const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            posts.push({ username, title, content });
            localStorage.setItem('blogPosts', JSON.stringify(posts));
            window.location.href = 'blog.html';
        } else {
            formError.textContent = 'Please complete all fields.';
        }
    });
});
