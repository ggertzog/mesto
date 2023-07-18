export class FormValidator {
    #formElement; //Элемент формы
    #config; //список селекторов
    #inputList; //список инпутов
    #buttonElement //элемент кнопки
    constructor(formElement, config) {
        this.#formElement = formElement;
        this.#config = config;
        this.#inputList = Array.from(formElement.querySelectorAll(this.#config.inputSelector));
        this.#buttonElement = this.#formElement.querySelector(this.#config.submitButtonSelector);
    }
    #showInputError(inputElement) {
        const errorElement = this.#formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.add(this.#config.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this.#config.errorClass);
    }
    #hideInputError(inputElement) {
        const errorElement = this.#formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.remove(this.#config.inputErrorClass);
        errorElement.classList.remove(this.#config.errorClass);
        errorElement.textContent = "";
    }
    checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
          this.#showInputError(inputElement);
        } else {
          this.#hideInputError(inputElement);
        }
    }
    #disableButton() {
        this.#buttonElement.classList.add(this.#config.inactiveButtonClass);
        this.#buttonElement.disabled = true;
    }
    #enableButton() {
        this.#buttonElement.classList.remove(this.#config.inactiveButtonClass);
        this.#buttonElement.disabled = false;
    }
    #hasInvalidInput() {
        return this.#inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }
    toggleButtonState() {
        if (this.#hasInvalidInput()) {
            this.#disableButton();
        } else {
            this.#enableButton();
        }
    }
    setEventListeners() {

        this.toggleButtonState();

        this.#inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this.checkInputValidity(inputElement);
                this.toggleButtonState();
            });
        });
    }
    enableValidation() {
        this.setEventListeners();
    }
    resetValid() {
    
        this.toggleButtonState();
    
        this.#inputList.forEach((inputElement) => {
          this.#hideInputError(inputElement);
        });
    }
}