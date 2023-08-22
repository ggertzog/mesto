import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleItemDelete) {
        super(popupSelector);
        this._handleItemDelete = handleItemDelete;
        this._form = this._popup.querySelector('.popup-confirm__form');
        this._item = {};
    }

    open(data) {
        super.open();
        this._item = data;
    }  
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleItemDelete(this._item);
        });
    }
}