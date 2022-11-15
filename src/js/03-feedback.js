import throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';
let formData = {};

const formRefs = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

populateInputs();

formRefs.addEventListener(
  'input',
  throttle(evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

formRefs.addEventListener('submit', evt => {
  evt.preventDefault();
  formData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  console.log('Form Data are:', formData);
  email.value = '';
  message.value = '';
  localStorage.clear();
});

function populateInputs() {
  formData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));

  if (formData) {
    email.value = formData.email;
    message.value = formData.message;
  } else {
    formData = {};
  }
}
