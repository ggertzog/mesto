//обьявил класс с экспортом
export default class Card {
    
    constructor({data, handleClickImage}, templateSelector) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._handleClickImage = handleClickImage;
        this._templateSelector = templateSelector;
    }
    
    //матод создания карточки
    createCard() {
        this._elementCard = this._getTemplate();
        const elementTitle = this._elementCard.querySelector('.elements__title');
        const elementLink = this._elementCard.querySelector('.elements__image');
        this._buttonCardDelete = this._elementCard.querySelector('.elements__button-del');
        this._buttonCardLike = this._elementCard.querySelector('.elements__button');
        this._cardImage = this._elementCard.querySelector('.elements__image');
        elementTitle.textContent = this._name;
        elementLink.src = this._link;
        elementLink.alt = this._name;
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
        this._cardImage.addEventListener('click', () => {
            this._handleClickImage(this._name, this._link);
        });
    }
}