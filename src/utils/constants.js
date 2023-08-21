//обьект с селекторами классов
export const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_type_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__span-error_type_active'
}

//конфиг для класса api
export const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    "content-type": "application/json",
    authorization: "e8e3db00-8e62-4b7a-9288-f8f3414bebc7",
  }
}

const content = document.querySelector('.content');

//Переменные первого попапа
export const popupProfile = document.querySelector('.popup-profile');
export const popupFormProfile = popupProfile.querySelector('.popup__form');
export const popupProfileOpenButton = content.querySelector('.profile__edit-button');
export const popupProfileCloseButton = popupProfile.querySelector('.popup__button-close');
export const nameInput = popupProfile.querySelector('.popup__input_type_name');
export const jobInput = popupProfile.querySelector('.popup__input_type_about');

//Переменные второго поп-апа
export const popupCreate = document.querySelector('.popup-create');
export const popupFormCreate = popupCreate.querySelector('.popup__form');
export const popupCreateCloseButton = popupCreate.querySelector('.popup__button-close');
export const popupCreateOpenButton = document.querySelector('.profile__add-button');

//Попап подтверждения удаления
export const popupConfirm = document.querySelector('.popup-confirm');
export const popupConfirmSubmitButton = popupConfirm.querySelector('.popup__button');

//переменные попапа аватара
export const popupAvatar = document.querySelector('.popup-avatar');
export const popupFormAvatar = popupAvatar.querySelector('.popup__form');
export const popupAvatarOpenButton = document.querySelector('.profile__avatar-button');

//создал переменную секции elements
export const containerSelector = '.elements';

