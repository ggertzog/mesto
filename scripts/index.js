//Переменные первого попапа
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupButtonOpen = document.querySelector('.profile__edit-button');
let popupButtonClose = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_about');
let userName = document.querySelector('.profile__user-name');
let userAbout = document.querySelector('.profile__user-description');

//функция открытия поп-апа, присваиваем инпутам текстовые значения
function openPopupForm () {
    popup.classList.add('popup_opened');
    nameInput.value = userName.textContent
    jobInput.value = userAbout.textContent
}
//функция закрытия поп-апа
function closePopupForm () {
  popup.classList.remove('popup_opened');
}
//функция отправки формы и присвоения текстовых значений
function savePopupForm (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value
  userAbout.textContent = jobInput.value
  closePopupForm();
}
//слушатель для открытия поп-апа
popupButtonOpen.addEventListener('click', openPopupForm);
//слушатель закрытия поп-апа
popupButtonClose.addEventListener('click', closePopupForm);
//слушатель отправки формы на сервер
popupForm.addEventListener('submit', savePopupForm);



//*Код для второго поп-апа*
//назначил переменные
let popupCreate = document.querySelector('.popup-create');
let popupCreateButtonClose = document.querySelector('.popup__button-exit');
let popupCreateButton = document.querySelector('.profile__add-button');
let titleInput = document.querySelector('.popup__input_type_title');
let linkInput = document.querySelector('.popup__input_type_link');
let popupFormCreate = document.querySelector('.popup__form-create');

//функция открытия второго поп-апа
function openPopupCreate () {
  popupCreate.classList.add('popup_opened');
}
//функция закрытия поп-апа 2
function closePopupCreate () {
  popupCreate.classList.remove('popup_opened');
}


// popupFormCreate.addEventListener('submit', addValues);
//слушатель закрытия второго поп-апа
popupCreateButtonClose.addEventListener('click', closePopupCreate);
//слушать открытия второго поп-апа
popupCreateButton.addEventListener('click', openPopupCreate);


//*Код создания карточек*
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


//Функция обработчик добавления новой карточки
elementForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  renderCard(titleInput.value, linkInput.value, elementsSection, 'prepend');
  closePopupCreate();

  titleInput.value = '';
  linkInput.value = '';
})

//Функция для обработки массива
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

  //*Третий попап*//
   const popupImage = document.querySelector('.popup-image');
   const popupElementImage = document.querySelector('.popup__image');
   const popupSubtitle = document.querySelector('.popup__subtitle');
   const popupButtonImage = popupImage.querySelector('.popup__button-close');

  



