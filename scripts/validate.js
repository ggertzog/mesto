//функция показа ошибки
function showError (inputElement, errorElement, options) {
    inputElement.classList.add(options.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

//функция удаления ошибки
function hideError (inputElement, errorElement, options) {
    inputElement.classList.remove(options.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

// функция переключения стилей инпутя в зависимости от валидости
function checkInputValidity(inputElement, formElement, options) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if(!isInputValid) {
        showError (inputElement, errorElement, options);
    } else {
        hideError (inputElement, errorElement, options);
    }
}

//функция блокировки кнопки
function disabledButton (buttonElement, options) {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add(options.inactiveButtonClass);
}

//функция разблокировки кнопки 
function enableButton (buttonElement, options) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(options.inactiveButtonClass);
}

// функция переключения состояния кнопки
function toggleButtonState(buttonElement, isActive, options) {
    if (!isActive) {
        disabledButton (buttonElement, options);
    } else {
        enableButton (buttonElement, options);
    }
}


// функция для присваивания обработчиков событий
function setEventListener (formElement, options) {
    const inputList = formElement.querySelectorAll(options.inputSelector);
    const submitButtonElement = formElement.querySelector(options.submitButtonSelector);

    toggleButtonState(submitButtonElement, formElement.checkValidity(), options);

    inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function() {
            toggleButtonState(submitButtonElement, formElement.checkValidity(), options);
            checkInputValidity(inputElement, formElement, options);
        });
    })
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        if (!formElement.checkValidity()) return;
    });
}

// функция валидации, итоговая функция включающая в себя все остальные
function enableValidation(options) {
    const formList = document.querySelectorAll(options.formSelector);

    formList.forEach(function (formElement) {
        setEventListener(formElement, options);
    });
}

// вызвал функцию в параметры указал обьект 
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_type_invalid',
    inputErrorClass: 'popup__input_type_error'
  });