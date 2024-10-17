
const form = document.getElementById("myForm");
const inputField = document.getElementById("inputField");

const alphanumericPattern = /^[a-zA-Z0-9]+$/;

function validateInput() {
   const inputValue = inputField.value.trim();

   if (alphanumericPattern.test(inputValue)) {
        alert('Input is valid! Submission successful.');
        return true;
 }  else  {
        alert('Input is invalid. Only alphanumeric characters.');
        return false;
}
}
form.addEventListener('submit', function(event) {
    event.preventDefault();

if (validateInput()) {
    form.submit();

}
});
