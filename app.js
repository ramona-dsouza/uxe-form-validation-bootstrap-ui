const nameInput = document.getElementById('name');
const zipInput = document.getElementById('zip');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

nameInput.addEventListener('blur', validateName);
zipInput.addEventListener('blur', validateZip);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);

function setValidationState(input, isValid) {
  input.classList.toggle('is-invalid', !isValid);
  input.classList.toggle('is-valid', isValid);
  input.setAttribute('aria-invalid', String(!isValid));

  const error = document.getElementById(`${input.id}-error`);
  if (error) {
    error.setAttribute('aria-hidden', String(isValid));
  }
}

function validateName() {
  const regex = /^[a-zA-Z]{2,10}$/;
  setValidationState(nameInput, regex.test(nameInput.value));
}

function validateZip() {
  const regex = /^[0-9]{5}(-[0-9]{4})?$/;
  setValidationState(zipInput, regex.test(zipInput.value));
}

function validateEmail() {
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  setValidationState(emailInput, regex.test(emailInput.value));
}

function validatePhone() {
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  setValidationState(phoneInput, regex.test(phoneInput.value));
}
