//импорт js файлов
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { options, initialCards } from "./constants.js";

//Переменные первого попапа
const popupProfile = document.querySelector('.popup-profile');
const popupFormProfile = popupProfile.querySelector('.popup__form');
const popupButtonOpen = document.querySelector('.profile__edit-button');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_about');
const userName = document.querySelector('.profile__user-name');
const userAbout = document.querySelector('.profile__user-description');
// находим все поп-апы для закрытия по оверлею
const popups = document.querySelectorAll('.popup');

//Переменные второго поп-апа
const popupCreate = document.querySelector('.popup-create');
const popupFormCreate = popupCreate.querySelector('.popup__form');
const popupCreateButton = document.querySelector('.profile__add-button');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');

//создал переменную секции elements
const elementsSection = document.querySelector('.elements'); 

//Переменные третьего поп-апа
const popupImage = document.querySelector('.popup-image');
const popupElementImage = document.querySelector('.popup-image__element');
const popupSubtitle = document.querySelector('.popup-image__subtitle');

//Создал экземпляры класса FormValidator для каждой формы
const cardValidator = new FormValidator(popupFormCreate, options);
const profileValidator = new FormValidator(popupFormProfile, options);

//универсальная функция для открытия поп-апов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

// универсальная функция закрытия поп-апов
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

//функция закрытия поп-апа при нажатии Escape
function closeByEsc (evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// функция закрытия по оверлею, проходим по всем поп-апам методом forEach если те содержат popup используем функцию закрытия
popups.forEach(function (popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });
});

//метод forEach для того чтобы повесить слушатель закрытия при нажатии на все поп-апы
popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//функция отправки формы и присвоения текстовых значений поп-апа профиля
function savePopupProfileForm (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userAbout.textContent = jobInput.value;
  closePopup(popupProfile);
}

//Функция обработчик добавления новой карточки
popupFormCreate.addEventListener('submit', function (evt){
  evt.preventDefault();
  renderCard(titleInput.value, linkInput.value, elementsSection, 'prepend');
  closePopup(popupCreate);
  evt.target.reset ();
});

// функция удаления карточки
function handleClickDelete(elementCard) {
  elementCard.remove();
}

//функция лайка карточки
function handleClickLike(evt) {
  evt.target.classList.toggle('elements__button_active');
}

function handleClickImage(evt) {
    const cardName = evt.target.closest('.elements__card').querySelector('.elements__title').textContent;
    const cardLink = evt.target.getAttribute('src');
    renderPopupImage(cardName, cardLink);
    openPopup(popupImage);
}

//Функция для отдельного рендеринга карточек
function renderCard(name, link, pattern, position = 'append') {
  //создал экземпляр класса card
  const cardElement = new Card(
    { name, link, handleClickDelete, handleClickLike, handleClickImage },
    '#elements__template'
    ).createCard();
  switch (position) {
    case "append":
      pattern.append(cardElement);
      break;
    case "prepend":
      pattern.prepend(cardElement);
      break;
    default:
      break;
  }
}

//метод forEach для массива
initialCards.forEach(function (el) {
  renderCard(el.name, el.link, elementsSection);
});

//Функция обработки и присваивания значений карточек значениям поп-апа
function renderPopupImage(name, link) {
  popupSubtitle.textContent = name;
  popupElementImage.setAttribute('src', link);
  popupElementImage.setAttribute('alt', name);
}

//слушатель поп-апа профиля
popupButtonOpen.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = userName.textContent;
  jobInput.value = userAbout.textContent;
});

//слушатель поп-апа добавления
popupCreateButton.addEventListener('click', () => {
  popupFormCreate.reset();
  cardValidator.resetValid();
  openPopup(popupCreate);
});


//слушатель отправки формы на сервер поп-апа профиля
popupFormProfile.addEventListener('submit', savePopupProfileForm);
//вызвал фалидацию форм
profileValidator.enableValidation();
cardValidator.enableValidation();
