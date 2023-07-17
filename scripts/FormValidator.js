export class FormValidator {
    #formElement; //Элемент формы
    #listSelector; //список селекторов
    #inputList; //список инпутов
    #buttonElement //элемент кнопки
    constructor(formElement, listSelector) {
        this.#formElement = formElement;
        this.#listSelector = listSelector;
        this.#inputList = Array.from(formElement.querySelectorAll(this.#listSelector.inputSelector));
        this.#buttonElement = this.#formElement.querySelector(this.#listSelector.submitButtonSelector);
    }
    #showInputError(inputElement) {
        const errorElement = this.#formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.add(this.#listSelector.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.style.opacity = '1';
    }
    #hideInputError(inputElement) {
        const errorElement = this.#formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.remove(this.#listSelector.inputErrorClass);
        errorElement.style.opacity = '0';
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
        this.#buttonElement.classList.add(this.#listSelector.inactiveButtonClass);
        this.#buttonElement.disabled = "disabled";
    }
    #enableButton() {
        this.#buttonElement.classList.remove(this.#listSelector.inactiveButtonClass);
        this.#buttonElement.disabled = false;
    }
    #hasInvalidInput() {
        return this.#inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }
    toggleButtonState() {
        if (this.#hasInvalidInput()) {
            this.#disableButton(this.#buttonElement, this.#listSelector);
        } else {
            this.#enableButton(this.#buttonElement, this.#listSelector);
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