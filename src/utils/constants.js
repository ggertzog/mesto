//обьект с селекторами классов
export const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_type_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__span-error_type_active'
}
//массив карточек
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

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

//создал переменную секции elements
export const containerSelector = '.elements'; 
