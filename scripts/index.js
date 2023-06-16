let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupButtonOpen = document.querySelector('.profile__edit-button');
let popupButtonClose = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_about');
let userName = document.querySelector('.profile__user-name');
let userAbout = document.querySelector('.profile__user-description');

//функция открытия поп-апа, присваиваем инпутам текстовые значения
function openPopupForm (){
    popup.classList.add('popup_opened');
    nameInput.value = userName.textContent
    jobInput.value = userAbout.textContent
}

//функция закрытия поп-апа
function closePopupForm (){
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

//*Код обработки карточек*
//здесь создал переменную относящуюся к секции
const elementsSection = document.querySelector('.elements');
//обратился к шаблону темплейт
const elementTemplate = document.querySelector('#elements__template').content;
console.log(elementTemplate);
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
  //применил метод forEach для каждого элемента массива
  initialCards.forEach(function (el) {
    const element = elementTemplate.cloneNode(true);
    element.querySelector('.elements__image').src = el.link;
    element.querySelector('.elements__title').textContent = el.name;
    elementsSection.append(element)
  });