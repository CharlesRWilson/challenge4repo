document.addEventListener('DOMContentLoaded', function() {
    // Retrieve existing submissions from local storage
    const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
  
    // Display submissions
    const submissionsContainer = document.querySelector('#submissionsContainer');
  
    if (submissionsContainer) {
      existingSubmissions.forEach(submission => {
        const newSubmissionSection = document.createElement('div');
        newSubmissionSection.classList.add('submission');
  
        const submissionTitle = document.createElement('h3');
        submissionTitle.textContent = `${submission.title}`;

        const submissionUsername = document.createElement('h4');
        submissionUsername.textContent = `${submission.userName}`;
  
        const submissionContent = document.createElement('p');
        submissionContent.textContent = `Content: \u00A0\u00A0${submission.content}`;
  
        newSubmissionSection.appendChild(submissionTitle);
        newSubmissionSection.appendChild(submissionUsername);
        newSubmissionSection.appendChild(submissionContent);
  
        submissionsContainer.appendChild(newSubmissionSection);
      });
    }
  });
  document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
