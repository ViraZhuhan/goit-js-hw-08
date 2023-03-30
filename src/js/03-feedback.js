import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('[name="email"]'),
  textareaEl: document.querySelector('[name="message"]'),
};

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

populateForm();

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormDataInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Заповніть всі поля');
    return;
  }

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onFormDataInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedUserData = localStorage.getItem(STORAGE_KEY);

  if (savedUserData) {
    refs.emailEl.value = JSON.parse(savedUserData).email;
    refs.textareaEl.value = JSON.parse(savedUserData).message;
  }
  formData = {
    email: refs.emailEl.value,
    message: refs.textareaEl.value,
  };
}


