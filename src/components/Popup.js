export default class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupButtonClose = this._popup.querySelector('.popup__button-close');
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    //метод открытия попапа
    open() {
        document.addEventListener("keydown", this._handleEscClose);
        this._popup.classList.add('popup_opened');
    }
    //метод закрытия попапа
    close() {
        document.addEventListener("keydown", this._handleEscClose);
        this._popup.classList.remove('popup_opened');
    }
    //метод закрытия по Esc
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
          }
    }
    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if(
            evt.target.classList.contains('popup_opened') ||
            evt.target.classList.contains('popup__button-close')) {
                this.close();
            }
        });
        this._popupButtonClose.addEventListener('click', () => {
            this.close();
        });
    }
}