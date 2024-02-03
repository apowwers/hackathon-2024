var picture = null;
var firstName = null;
var lastName = null;
var dateOfBirth = null;
var dateOfDeath = null;
var aiBackground = null;
var story = null;

$("input[type='image']").click(function() {
    $("input[id='picture']").click();
});

document.getElementById('submitFuneral').addEventListener('click', function() {
    picture = document.getElementById('picture').files[0];
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    dateOfBirth = document.getElementById('dateOfBirth').value;
    dateOfDeath = document.getElementById('dateOfDeath').value;
    aiBackground = document.getElementById('aiBackground').value;
    story = document.getElementById('story').value;

    const formData = new FormData();
    formData.append('picture', picture);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('dateOfDeath', dateOfDeath);
    formData.append('aiBackground', aiBackground);
    formData.append('story', story);

    fetch('/newFuneral', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            // Redirect to profile.html if funeral created successfully
            window.location.href = '/profile';
        } else {
            // Handle error or unsuccessful creation
            alert(data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while creating the funeral.');
    });
});
