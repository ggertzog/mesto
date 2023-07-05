//обьект 
const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_type_invalid',
    inputErrorClass: 'popup__input_type_error',
}

//функция показа ошибки
function showError(formElement, inputElement, errorMessage, options) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add(options.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.style.opacity = '1';
}

//функция удаления ошибки
function hideError(formElement, inputElement, options) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.remove(options.inputErrorClass);
    errorElement.style.opacity = '0';
    errorElement.textContent = "";
}

// функция переключения стилей инпута в зависимости от валидости
function checkInputValidity(formElement, inputElement, options) {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage, options);
    } else {
      hideError(formElement, inputElement, options);
    }
}

function disableButton(buttonElement, options) {
    buttonElement.classList.add(options.inactiveButtonClass);
    buttonElement.disabled = "disabled";
}

function enableButton(buttonElement, options) {
    buttonElement.classList.remove(options.inactiveButtonClass);
    buttonElement.disabled = false;
}

// функция переключения состояния кнопки
function toggleButtonState(inputList, buttonElement, options) {
    if (hasInvalidInput(inputList)) {
        disableButton (buttonElement, options);
    } else {
        enableButton(buttonElement, options);
    }
}

//функция проверки инпутов на валидность
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
}


// функция для присваивания обработчиков событий
function setEventListeners(formElement, options) {
    const inputList = Array.from(
      formElement.querySelectorAll(options.inputSelector)
    );
  
    const buttonElement = formElement.querySelector(options.submitButtonSelector);
  
    toggleButtonState(inputList, buttonElement, options);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, options);
        toggleButtonState(inputList, buttonElement, options);
      });
    });
}

//общая функция валидации 
function enableValidation(options) {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });

      setEventListeners(formElement, options);
    });
}

// функция сброса состояния валидации
function resetValid(formElement, options) {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    const buttonElement = formElement.querySelector(options.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, options);

    inputList.forEach((inputElement) => {
      hideError(formElement, inputElement, options);
    });
}


// вызвал функцию в параметры указал обьект 
enableValidation(options);