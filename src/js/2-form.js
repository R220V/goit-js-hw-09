const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (formDataFromLS === null) {
      return;
    }

    formData = formDataFromLS;

    for (const key in formDataFromLS) {
      if (feedbackFormEl.elements[key]) {
        feedbackFormEl.elements[key].value = formDataFromLS[key];
      }
    }
  } catch (err) {
    console.log(err);
  }
};

fillFormFields();

const onFormFieldInput = event => {
  const formFieldEl = event.target;
  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;

  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  let validForm = true;
  for (const key in formData) {
    if (formData[key].trim() === '') {
      validForm = false;
      break;
    }
  }

  if (!validForm) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  feedbackFormEl.reset();

  localStorage.removeItem('feedback-form-state');

  formData = {
    email: '',
    message: '',
  };
};

feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
feedbackFormEl.addEventListener('input', onFormFieldInput);
