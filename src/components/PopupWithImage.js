import Popup from './Popup.js';

//создали класс
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupSubtitle = this._popup.querySelector('.popup-image__subtitle');
        this._popupELementImage = this._popup.querySelector('.popup-image__element');
    }

    //метод открытия попапа изображения
    open(name, link) {
        this._popupSubtitle.textContent = name;
        this._popupELementImage.src = link;
        this._popupELementImage.alt = name;
        super.open();
    }
}