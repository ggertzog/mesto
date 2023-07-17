//обьявил класс с экспортом
export class Card {
    #name;
    #link;
    #elementCard;
    #templateSelector;
    #handleClickDelete;
    #handleClickLike;
//задал приватный метод получения шаблона
    #getTemplate() {
        return document
        .querySelector(this.#templateSelector)
        .content.querySelector('.elements__card')
        .cloneNode(true);
    }
    constructor(
    { name, link, handleClickDelete, handleClickLike },
        templateSelector
    ) {
        this.#name = name;
        this.#link = link;
        this.#templateSelector = templateSelector;
        this.#handleClickDelete = handleClickDelete;
        this.#handleClickLike = handleClickLike;
    }
    //матод создания карточки
    createCard() {
        this.#elementCard = this.#getTemplate();
        const elementTitle = this.#elementCard.querySelector('.elements__title');
        const elementLink = this.#elementCard.querySelector('.elements__image');
        const buttonCardDelete = this.#elementCard.querySelector('.elements__button-del');
        const buttonCardLike = this.#elementCard.querySelector('.elements__button');
        elementTitle.textContent = this.#name;
        elementLink.setAttribute('src', this.#link);
        elementLink.setAttribute('alt', this.#name);
        //добавил метод лайка
        buttonCardLike.addEventListener('click', this.#handleClickLike);
        //добавил метод удаления карточки
        buttonCardDelete.addEventListener('click', () => {
            this.#handleClickDelete(this.#elementCard);
        });
        //получаем готовую карточку на выходе
        return this.#elementCard;
      } 
}