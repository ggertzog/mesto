import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleCardDelete) {
        super(popupSelector);
        this._handleCardDelete = handleCardDelete;
        this._form = this._popup.querySelector('.popup-confirm__form');
        this._cardData = {};
    }

    open(data) {
        super.open();
        this._cardData = data;
    }  
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleCardDelete(this._cardData);
        });
    }
}