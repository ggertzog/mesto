//обьявил класс с экспортом
export class Card {
    #name;
    #link;
    #elementCard;
    #templateSelector;
    #handleClickDelete;
    #handleClickLike;
    #handleClickImage;
    #buttonCardDelete;
    #buttonCardLike;
    #cardImage;
//задал приватный метод получения шаблона
    #getTemplate() {
        return document
        .querySelector(this.#templateSelector)
        .content.querySelector('.elements__card')
        .cloneNode(true);
    }
    constructor(
    { name, link, handleClickDelete, handleClickLike, handleClickImage },
        templateSelector
    ) {
        this.#name = name;
        this.#link = link;
        this.#templateSelector = templateSelector;
        this.#handleClickDelete = handleClickDelete;
        this.#handleClickLike = handleClickLike;
        this.#handleClickImage = handleClickImage;
    }
    
    //матод создания карточки
    createCard() {
        this.#elementCard = this.#getTemplate();
        const elementTitle = this.#elementCard.querySelector('.elements__title');
        const elementLink = this.#elementCard.querySelector('.elements__image');
        this.#buttonCardDelete = this.#elementCard.querySelector('.elements__button-del');
        this.#buttonCardLike = this.#elementCard.querySelector('.elements__button');
        this.#cardImage = this.#elementCard.querySelector('.elements__image');
        elementTitle.textContent = this.#name;
        elementLink.setAttribute('src', this.#link);
        elementLink.setAttribute('alt', this.#name);
        this.#setEventListeners();
        //получаем готовую карточку на выходе
        return this.#elementCard;
      }
      #setEventListeners() {
        this.#buttonCardLike.addEventListener('click', this.#handleClickLike);
        this.#buttonCardDelete.addEventListener('click', () => {
            this.#handleClickDelete(this.#elementCard);
        });
        this.#cardImage.addEventListener('click', this.#handleClickImage);
    }
}