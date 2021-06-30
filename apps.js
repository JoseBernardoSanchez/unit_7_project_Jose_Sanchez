// make the alert
const Alert = document.querySelector('#alert');
const xButton = document.querySelector('.alert button');

xButton.addEventListener('click', (e) => {
    Alert.style.display = 'none';
});

//make the buttons at the end send data
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
        document.querySelector('textarea').value = '';
        document.querySelector('input.form-field').value = '';
    }
});

var form = document.getElementById("userMessage");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
