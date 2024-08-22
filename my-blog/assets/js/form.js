const myForm = document.querySelector('#myForm');

if (myForm) {
  myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userNameValue = document.querySelector('#username').value;
    const titleValue = document.querySelector('#title').value;
    const contentValue = document.querySelector('#content').value;

    let submissionsArray = JSON.parse(localStorage.getItem('submissions')) || [];
    
    submissionsArray.push({ userName: userNameValue, title: titleValue, content: contentValue });
    
    localStorage.setItem('submissions', JSON.stringify(submissionsArray));
  
    myForm.reset();
    window.location.href = 'blog.html';
  });
}
document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});