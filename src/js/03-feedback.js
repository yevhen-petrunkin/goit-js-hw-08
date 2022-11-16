import throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';

const formRefs = document.querySelector('.feedback-form');
const { email, message } = formRefs.elements;
const formData = {
  email: '',
  message: '',
};
// const formData = {};
let dataFromStorage = null;

formRefs.addEventListener('input', throttle(onFormInput, 500));
formRefs.addEventListener('submit', onFormSubmit);

populateInputs();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  // formData.email = email.value;
  // formData.message = message.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  dataFromStorage = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  if (dataFromStorage) {
    console.log('Form Data are:', dataFromStorage);
    dataFromStorage = null;
  }

  localStorage.removeItem(FORM_STORAGE_KEY);
  evt.currentTarget.reset();
}

function populateInputs() {
  dataFromStorage = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  if (dataFromStorage) {
    email.value = dataFromStorage.email;
    message.value = dataFromStorage.message;
  }
}
