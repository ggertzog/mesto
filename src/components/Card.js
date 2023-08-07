//обьявил класс с экспортом
export default class Card {
    
    constructor({data, handleClickImage}, templateSelector) {
        this._data = data;
        this._handleClickImage = handleClickImage;
        this._templateSelector = templateSelector;
        this._elementCard = this._getTemplate();
        this._elementImage = this._elementCard.querySelector('.elements__image');
        this._elementTitle = this._elementCard.querySelector('.elements__title');
        this._buttonCardDelete = this._elementCard.querySelector('.elements__button-del');
        this._buttonCardLike = this._elementCard.querySelector('.elements__button');
    }
    
    //матод создания карточки
    createCard() {
        this._elementTitle.textContent = this._data.title;
        this._elementImage.src = this._data.link;
        this._elementImage.alt = this._data.title;
        this._setEventListeners();
        //получаем готовую карточку на выходе
        return this._elementCard;
    }
    //задал приватный метод получения шаблона
    _getTemplate() {
        const templateSelector = document.querySelector(this._templateSelector)
        .content.querySelector('.elements__card')
        .cloneNode(true);

        return templateSelector
    }
    _setEventListeners() {
        this._buttonCardLike.addEventListener('click', () => {
            this._buttonCardLike.classList.toggle('elements__button_active');
        });
        this._buttonCardDelete.addEventListener('click', () => {
            this._elementCard.remove();
        });
        this._elementImage.addEventListener('click', () => {
            this._handleClickImage(this._data.title, this._data.link);
        });
    }
}
