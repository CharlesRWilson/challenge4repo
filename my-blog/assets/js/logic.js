// logic.js

// Function to load posts from localStorage
const loadPosts = () => {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    return posts;
};

// Function to save a new post to localStorage
const savePost = (username, title, content) => {
    const posts = loadPosts();
    posts.push({ username, title, content });
    localStorage.setItem('blogPosts', JSON.stringify(posts));
};

// Function to toggle theme
const toggleTheme = (button) => {
    document.body.classList.toggle('dark-mode');
    button.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
};