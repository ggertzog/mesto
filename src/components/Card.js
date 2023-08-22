//обьявил класс с экспортом
export default class Card {
    
    constructor({data, handleClickImage, userId, handleLikePost, handleOpenConfirm}, templateSelector) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._userId = userId;
        this._handleClickImage = handleClickImage;
        this._handleLikePost = handleLikePost;
        this._handleOpenConfirm = handleOpenConfirm;
        this._templateSelector = templateSelector;
        this._elementCard = this._getTemplate();
        this._elementImage = this._elementCard.querySelector('.elements__image');
        this._elementTitle = this._elementCard.querySelector('.elements__title');
        this._buttonCardDelete = this._elementCard.querySelector('.elements__button-del');
        this._buttonCardLike = this._elementCard.querySelector('.elements__button-like');
        this._likesSum = this._elementCard.querySelector('.elements__likes-sum');
    }
    
    //возвращаем поле id полученного обьекта
    getId() {
        return this._data._id;
    }

    //сверяем поле id обьекта лайкз карточки с нашим id , получаем правду или ложь
    isLiked() {
        return this._data.likes.some((item) => {
            return item._id === this._userId;
        })
    }

    //присваиваем длинну массива лайков счетчику и ставим условие для переключения состояния лайка 
    _updateLike() {
        this._likesSum.textContent = this._data.likes.length;

        if(this.isLiked()) {
            this._buttonCardLike.classList.add('elements__button-like_active');
        } else {
            this._buttonCardLike.classList.remove('elements__button-like_active');
        }
    }

    //публичный метод для установки и снятия лайка
    setLikes(data) {
        this._data.likes = data.likes;
        this._updateLike();
    }

    //проверяем владельца карточки по айдишнику для сортировки значка удаления
    checkOwnerCard() {
        if(this._data.owner._id !== this._userId) {
            this._buttonCardDelete.remove()
        }
    }

    //метод удаления карточки с очисткой гэрбеджколлектора
    deleteCard() {
        this._elementCard.remove()
        this._elementCard = null;
    }

    //матод создания карточки
    createCard() {
        this._elementTitle.textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._likesSum.textContent = this._data.likes.length;
        this._updateLike();
        this.checkOwnerCard();
        this._setEventListeners();
        //получаем готовую карточку на выходе
        return this._elementCard;
    }

    //задал приватный метод получения шаблона
    _getTemplate() {
        const templateSelector = document.querySelector(this._templateSelector)
        .content.querySelector('.elements__card')
        .cloneNode(true);

        return templateSelector;
    }

    _setEventListeners() {
        this._buttonCardLike.addEventListener('click', () => {
            this._handleLikePost(this);
        });
        this._buttonCardDelete.addEventListener('click', () => {
            this._handleOpenConfirm(this._elementCard);
        });
        this._elementImage.addEventListener('click', () => {
            this._handleClickImage(this._name, this._link);
        });
    }
}
