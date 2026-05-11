document.addEventListener

const form = document.getElementById('greetingForm');
const greetingMessage = document.getElementById('greetingMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); //Stops the page from refreshing on submit

    const userName = document.getElementById('nameInput').value; //Gets the value from the input field

    greetingMessage.textContent = 'Hello,' + userName + '! Welcome to Brianas LEGO page!'; 
    greetingMessage.style.display = 'block'; //Shows the greeting message
    form.reset(); //Resets the form after submission
});

