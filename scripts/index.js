//Переменные первого попапа
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupButtonOpen = document.querySelector('.profile__edit-button');
let popupButtonClose = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_about');
let userName = document.querySelector('.profile__user-name');
let userAbout = document.querySelector('.profile__user-description');

//Переменные второго поп-апа
let popupCreate = document.querySelector('.popup-create');
let popupCreateButtonClose = document.querySelector('.popup__button-exit');
let popupCreateButton = document.querySelector('.profile__add-button');
let titleInput = document.querySelector('.popup__input_type_title');
let linkInput = document.querySelector('.popup__input_type_link');
let popupFormCreate = document.querySelector('.popup__form-create');

//Переменные и массив для секции elements
//здесь создал переменную относящуюся к секции
const elementsSection = document.querySelector('.elements');
//обратился к шаблону темплейт
const elementTemplate = document.querySelector('#elements__template').content.querySelector('.elements__card');
//обьявил переменную формы
const elementForm = document.querySelector('.popup__form-create');
//обьявил массив
const initialCards = [
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

//Переменные третьего поп-апа
const popupImage = document.querySelector('.popup-image');
const popupElementImage = document.querySelector('.popup-image__element');
const popupSubtitle = document.querySelector('.popup-image__subtitle');
const elementsImage = document.querySelector('.elements__image');
const elementSubtitle = document.querySelector('.elements__title');

//функция открытия поп-апа профиля, присваиваем инпутам текстовые значения
function openPopupForm () {
    popup.classList.add('popup_opened');
    nameInput.value = userName.textContent
    jobInput.value = userAbout.textContent
}
//функция закрытия поп-апа профиля
function closePopupForm () {
  popup.classList.remove('popup_opened');
}
//функция отправки формы и присвоения текстовых значений поп-апа профиля
function savePopupForm (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value
  userAbout.textContent = jobInput.value
  closePopupForm();
}
//функция открытия поп-апа добавления
function openPopupCreate () {
  popupCreate.classList.add('popup_opened');
}
//функция закрытия поп-апа добавления
function closePopupCreate () {
  popupCreate.classList.remove('popup_opened');
}
//Функция обработчик добавления новой карточки
elementForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  renderCard(titleInput.value, linkInput.value, elementsSection, 'prepend');
  closePopupCreate();

  titleInput.value = '';
  linkInput.value = '';
})
//Функция для обработки шаблона template
function createCard(name, link) {
  const elementCard = elementTemplate.cloneNode(true);
  const elementTitle = elementCard.querySelector('.elements__title');
  const elementLink = elementCard.querySelector('.elements__image');
  elementTitle.textContent = name;
  elementLink.setAttribute('src', link);
  //Функция лайка
  elementCard.querySelector('.elements__button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__button_active');
  });
  //Функция удаления карточки
  elementCard.querySelector('.elements__button-del').addEventListener('click', function(){
    elementCard.remove();
  })
  return elementCard;
} 
//Функция для отдельного рендеринга карточек
function renderCard(name, link, pattern, position = 'append') {
  switch (position) {
    case "append":
      pattern.append(createCard(name, link));
      break;
    case "prepend":
      pattern.prepend(createCard(name, link));
      break;
    default:
      break;
  }
}
//метод forEach для массива
initialCards.forEach(function (el) {
  renderCard(el.name, el.link, elementsSection);
});
//Функция открытия третьего поп-апа
function popupImageOpen () {
  popupImage.classList.add('popup_opened');
}
//функция закрытия третьего поп-апа
popupImage.querySelector('.popup-image__button-close').addEventListener('click', function() {
  popupImage.classList.remove('popup_opened');
})
//Функция обработки и присваивания значений карточек значениям поп-апа
function renderPopupImage(name, link) {
  popupSubtitle.textContent = name;
  popupElementImage.setAttribute('src', link);
}
//Слушатель события при нажатии на картинку и присвоения значения картинки и подписи
elementsSection.addEventListener('click', function(evt){
  if(evt.target.classList.contains('elements__image')){
  const cardName = evt.target.closest('.elements__card').querySelector('.elements__title').textContent;
  const cardLink = evt.target.getAttribute('src');
  renderPopupImage(cardName, cardLink);
  popupImageOpen();
  }
});

//слушатель для открытия поп-апа профиля
popupButtonOpen.addEventListener('click', openPopupForm);
//слушатель закрытия поп-апа профиля
popupButtonClose.addEventListener('click', closePopupForm);
//слушатель отправки формы на сервер поп-апа профиля
popupForm.addEventListener('submit', savePopupForm);
//слушатель закрытия поп-апа добавления
popupCreateButtonClose.addEventListener('click', closePopupCreate);
//слушать открытия поп-апа добавления
popupCreateButton.addEventListener('click', openPopupCreate);















  
  

  
  



