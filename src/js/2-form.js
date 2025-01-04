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
    // formData = formDataFromLS;
    console.log(formDataFromLS);
    // console.dir(feedbackFormEl);
    // for (const key in formDataFromLS) {
    //   feedbackFormEl.elements[key].value = formDataFromLS[key];
    // }
  } catch (err) {
    //     console.log(err);
  }
};
fillFormFields();

const onFormFieldChange = event => {
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

// const onFeedbackFormSubmit = event => {
//   event.preventDefault();
//   const { currentTarget: formEl } = event;
//   formEl.reset();
//   localStorage.removeItem('feedback-form-state');
// };
feedbackFormEl.addEventListener('change', onFormFieldChange);
// feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

// -------------------
// let formData = {
//   email: '',
//   message: '',
// };

// const feedbackFormEl = document.querySelector('.feedback-form');
// const fillFormFields = () => {
//   try {
//     const formDataFromLS = localStorage.getItem('feedback-form-state');
//     if (!formDataFromLS) {
//       return;
//     }
//     const parsedData = JSON.parse(formDataFromLS);

//     for (const key in parsedData) {
//       feedbackFormEl.elements[key].value = parsedData[key];
//     }
//     formData = parsedData;
//   } catch (error) {
//     console.error(error);
//   }
// };
// fillFormFields();

// const onFormFieldChange = event => {
//   const formFieldEl = event.target;
//   const fieldValue = formFieldEl.value;
//   const fieldName = formFieldEl.name;
//   formData[fieldName] = fieldValue;

//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// };

// feedbackFormEl.addEventListener('input', onFormFieldChange);

// const onFeedbackFormSubmit = event => {
//   event.preventDefault();
//   let isFormValid = true;
//   for (const key in formData) {
//     if (formData[key].trim() === '') {
//       isFormValid = false;
//       break;
//     }
//   }

//   if (!isFormValid) {
//     alert('Fill please all fields');
//     return;
//   }

//   console.log(formData);

//   event.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
//   formData = {
//     email: '',
//     message: '',
//   };
// };

// feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
