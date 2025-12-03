let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

const saved = JSON.parse(localStorage.getItem('feedback-form-state'));
if (saved) {
  form.elements.email.value = saved.email || '';
  form.elements.message.value = saved.message || '';

  formData.email = saved.email || '';
  formData.message = saved.message || ``;
}

form.addEventListener('input', () => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(formData);
});
form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(`Form submitted:`, formData);

  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {
    email: '',
    message: '',
  };
});
