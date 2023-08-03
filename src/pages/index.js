import './index.css';
import { 
  options,
  jobInput, 
  nameInput, 
  popupProfileCloseButton, 
  popupProfileOpenButton, 
  popupCreateCloseButton, 
  popupCreateOpenButton, 
  containerSelector,
  popupFormProfile,
  popupFormCreate, 
  initialCards} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";

//экземпляр класса userInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__user-name',
  aboutSelector: '.profile__user-description',
});

// Создал экземпляры класса FormValidator для каждой формы
const cardValidator = new FormValidator(popupFormCreate, options);
const profileValidator = new FormValidator(popupFormProfile, options);

//экземпляр формы добавления карточек
const popupCreate = new PopupWithForm('.popup-create', submitCreateForm);

//экземпляр попапа с изображением
const popupImage = new PopupWithImage('.popup-image');

//экземпляр для формы профиля
const popupProfile = new PopupWithForm('.popup-profile', submitProfileForm);

//вызвал фалидацию форм
profileValidator.enableValidation();
cardValidator.enableValidation();

// вызвал метод setEventListeners для всех попапов
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupCreate.setEventListeners();

//функция сабмита попапа создания карточки
function submitCreateForm(cardData) {
  const renderedCard = generateCard(cardData);
  cardList.addItem(renderedCard);
}

//функция сабмита попапа профиля
function submitProfileForm(userData) {
  userInfo.setUserInfo(userData);
};

function handleProfileOpen() {
  const userDescription = userInfo.getUserInfo();
  nameInput.value = userDescription.name;
  jobInput.value = userDescription.about;
  profileValidator.resetValid();
  popupProfile.open();
}

// экземпляр класса card для создания карточки
const generateCard = (item) => {
  const newCard = new Card({
    data: item, 
    handleClickImage: (name, link) => {
      popupImage.open(name, link);
    },
  }, '#elements__template');
  const cardElement = newCard.createCard();
  return cardElement
}

// экземпляр класса section для рендера массива
const cardList = new Section({
  items:  initialCards,
  renderer: (item) => {
    const cardElement = generateCard(item);
    cardList.addItem(cardElement);

  }
}, containerSelector
);
cardList.renderItems();

// слушатели событий
popupCreateOpenButton.addEventListener('click', () => {
  cardValidator.resetValid();
  popupCreate.open();
});

popupCreateCloseButton.addEventListener('click', () => {
  popupCreate.close();
});

popupProfileOpenButton.addEventListener('click', handleProfileOpen);

popupProfileCloseButton.addEventListener('click', () => {
  popupProfile.close();
});