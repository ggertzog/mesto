export class FormValidator {
    _formElement; //Элемент формы
    _config; //список селекторов
    _inputList; //список инпутов
    _buttonElement //элемент кнопки
    constructor(formElement, config) {
        this._formElement = formElement;
        this._config = config;
        this._inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }
    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`_${inputElement.name}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._config.errorClass);
    }
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`_${inputElement.name}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = "";
    }
    checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement);
        } else {
          this._hideInputError(inputElement);
        }
    }
    _disableButton() {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
    }
    _enableButton() {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.disabled = false;
    }
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }
    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton();
        } else {
            this._enableButton();
        }
    }
    setEventListeners() {

        this.toggleButtonState();

        this._inputList.forEach((inputElement) => {
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
    
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
        });
    }
}