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
    // console.log(formDataFromLS);
    // console.dir(feedbackFormEl);
    for (const key in formDataFromLS) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
      // console.log(key);
    }
  } catch (err) {
    //     console.log(err);
  }
};
fillFormFields();

const onFormFieldInput = event => {
  // const { target: formFieldEl } = event;
  const formFieldEl = event.target;

  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;
  //   console.log(fieldName);
  //   console.dir(fieldValue);

  formData[fieldName] = fieldValue;
  // console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  // console.log('object');

  // const { currentTarget: formEl } = event;
  // formEl.reset();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');

  feedbackFormEl.addEventListener('input', onFormFieldInput);

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

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
