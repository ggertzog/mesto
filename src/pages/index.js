import './index.css';
import { 
  options,
  jobInput, 
  nameInput, 
  popupProfileOpenButton, 
  popupCreateOpenButton, 
  containerSelector,
  popupFormProfile,
  popupFormCreate, 
  configApi,
  popupAvatarOpenButton,
  popupFormAvatar} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import { Api } from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

let userId = null;

//экземпляр класса Api
const api = new Api(configApi);

//экземпляр класса userInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__user-name',
  aboutSelector: '.profile__user-description',
  avatarSelector: '.profile__avatar'
});

// Создал экземпляры класса FormValidator для каждой формы
const cardValidator = new FormValidator(popupFormCreate, options);
const profileValidator = new FormValidator(popupFormProfile, options);
const avatarValidator = new FormValidator(popupFormAvatar, options);

//экземпляр формы добавления карточек
const popupCreate = new PopupWithForm('.popup-create', submitCreateForm);

//экземпляр попапа с изображением
const popupImage = new PopupWithImage('.popup-image');

//экземпляр для формы профиля
const popupProfile = new PopupWithForm('.popup-profile', submitProfileForm);

//экземпляр формы подтверждения удаления
const popupConfirm = new PopupWithConfirm('.popup-confirm', handleItemCard);

//экземпляр формы аватара
const popupAvatar = new PopupWithForm('.popup-avatar', submitAvatarForm);

// экземпляр класса card для создания карточки
const generateCard = (item) => {
  const newCard = new Card({
    data: item, 
    handleClickImage: (name, link) => {
      popupImage.open(name, link);
    },
    userId,
    handleLikePost,
    handleOpenConfirm: () => {
      popupConfirm.open(newCard);
    }
  }, '#elements__template');
  return newCard.createCard();
}

// сделанную карточку добавляю в DOM 
const cardList = new Section({
  renderer: (item) => {
    const cardElement = generateCard(item);
    cardList.addItem(cardElement);

  }
}, containerSelector
);

//функция сабмита попапа создания карточки
function submitCreateForm(dataFromServer) {
  popupCreate.loading(true);
  //запрос на сервер для добавления карточки 
  api.postNewCard(dataFromServer)
    .then((res) => {
      const renderedCard = generateCard(res);
      cardList.addItem(renderedCard);
      popupCreate.close();
  })
    .catch((err) => console.log(err))
    .finally(() => {
      popupCreate.loading(false, 'Создать')
    })
}

//получаем данные с сервера переназначаем переменную userId и рендерим полученный массив карточек
//получили данные профиля и присвоили значения
api.getAllInfo()
  .then(([userData, initialCards]) => {
    userId = userData._id;
    cardList.renderItems(initialCards.reverse());
    userInfo.setUserInfo(userData);
  })
  .catch(err => console.log(err))

//функция сабмита попапа профиля
function submitProfileForm(userData) {
  popupProfile.loading(true);
  //передаю новые данные на сервер методом патч при событии сабмита
  api.editUserProfile(userData)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupProfile.close();
  })
  .catch((err) => {console.log(err)})
  .finally(() => {
    popupProfile.loading(false, 'Сохранить')
  })
};

// функция сабмита попапа подтверждения
function handleItemCard(dataCard) {
  api.deleteCard(dataCard.getId())
    .then(() => {
      dataCard.deleteCard();
      popupConfirm.close();
    })
    .catch(err => console.log(err))
}

//отправляем данные на сервер и присваиваем изображение аватаре через класс UserInfo
function submitAvatarForm(avatarData) {
  popupAvatar.loading(true);
  api.changeAvatar(avatarData)
    .then((res) => {
      userInfo.changeUserAvatar(res);
      popupAvatar.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupAvatar.loading(false, 'Сохранить')
    })
}

// функция изменения состояния лайка
function handleLikePost(exemplar) {
  api.changeLike(exemplar.getId(), exemplar.isLiked())
    .then((dataCard) => {
      exemplar.setLikes(dataCard);
    })
    .catch(err => console.log(err))
}

//получаем данные с сервера при открытии попапа профиля и присваиваем значения инпутам
function handleProfileOpen() {
  const userDescription = userInfo.getUserInfo();
  nameInput.value = userDescription.name;
  jobInput.value = userDescription.about;
  profileValidator.resetValid();
  popupProfile.open();
}

//слушатели событий попапа создания карточек
popupCreateOpenButton.addEventListener('click', () => {
  cardValidator.resetValid();
  popupCreate.open();
});

//слушатель событий для попапа профиля
popupProfileOpenButton.addEventListener('click', handleProfileOpen);

//слушатель событий попапа аватара
popupAvatarOpenButton.addEventListener('click', () => {
  popupAvatar.open();
  avatarValidator.resetValid();
})

//вызвал фалидацию форм
profileValidator.enableValidation();
cardValidator.enableValidation();
avatarValidator.enableValidation();

// вызвал метод setEventListeners для всех попапов
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupCreate.setEventListeners();
popupConfirm.setEventListeners();
popupAvatar.setEventListeners();