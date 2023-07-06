//Переменные первого попапа
const popupCard = document.querySelector('.popup-create');
const popupFormCard = popupCard.querySelector('.popup__form');
const popupProfile = document.querySelector('.popup-profile');
const popupForm = document.querySelector('.popup__form');
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
const popupCreateButton = document.querySelector('.profile__add-button');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');

//Переменные и массив для секции elements
//здесь создал переменную относящуюся к секции
const elementsSection = document.querySelector('.elements');
//обратился к шаблону темплейт
const elementTemplate = document.querySelector('#elements__template').content.querySelector('.elements__card');
//обьявил переменную формы
const popupFormCreate = popupCreate.querySelector('.popup__form');
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

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//функция отправки формы и присвоения текстовых значений поп-апа профиля
function savePopupForm (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value
  userAbout.textContent = jobInput.value
  const popup = evt.target.closest('.popup');
  closePopup(popup);
}

//Функция обработчик добавления новой карточки
popupFormCreate.addEventListener('submit', function (evt){
  const popup = evt.target.closest('.popup');
  evt.preventDefault();
  renderCard(titleInput.value, linkInput.value, elementsSection, 'prepend');
  closePopup(popup);
  evt.target.reset ();
})

//Функция для обработки шаблона template
function createCard(name, link) {
  const elementCard = elementTemplate.cloneNode(true);
  const elementTitle = elementCard.querySelector('.elements__title');
  const elementLink = elementCard.querySelector('.elements__image');
  elementTitle.textContent = name;
  elementLink.setAttribute('src', link);
  elementLink.setAttribute('alt', name);
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

//Функция обработки и присваивания значений карточек значениям поп-апа
function renderPopupImage(name, link) {
  popupSubtitle.textContent = name;
  popupElementImage.setAttribute('src', link);
  popupElementImage.setAttribute('alt', name);
}

//Слушатель тертьего поп-апа и события при нажатии на картинку и присвоения значения картинки и подписи
elementsSection.addEventListener('click', function(evt){
  if(evt.target.classList.contains('elements__image')){
  const cardName = evt.target.closest('.elements__card').querySelector('.elements__title').textContent;
  const cardLink = evt.target.getAttribute('src');
  renderPopupImage(cardName, cardLink);
  openPopup(popupImage);
  }
});

//слушатель поп-апа профиля
popupButtonOpen.addEventListener('click', function(){
  resetValid(popupForm, options);
  openPopup(popupProfile);
  nameInput.value = userName.textContent;
  jobInput.value = userAbout.textContent;
});

//слушатель поп-апа добавления
popupCreateButton.addEventListener('click', function() {
  popupFormCard.reset();
  resetValid(popupFormCard, options);
  openPopup(popupCreate);
});


//слушатель отправки формы на сервер поп-апа профиля
popupForm.addEventListener('submit', savePopupForm);