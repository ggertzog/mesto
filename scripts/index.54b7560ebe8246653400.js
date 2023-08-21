(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_type_invalid",inputErrorClass:"popup__input_type_error",errorClass:"popup__span-error_type_active"},e=document.querySelector(".content"),n=document.querySelector(".popup-profile"),r=n.querySelector(".popup__form"),o=e.querySelector(".profile__edit-button"),i=(n.querySelector(".popup__button-close"),n.querySelector(".popup__input_type_name")),u=n.querySelector(".popup__input_type_about"),a=document.querySelector(".popup-create"),l=a.querySelector(".popup__form"),c=(a.querySelector(".popup__button-close"),document.querySelector(".profile__add-button")),s=(document.querySelector(".popup-confirm").querySelector(".popup__button"),document.querySelector(".popup-avatar").querySelector(".popup__form")),f=document.querySelector(".profile__avatar-button");function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupButtonClose=this._popup.querySelector(".popup__button-close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__button-close"))&&t.close()})),this._popupButtonClose.addEventListener("click",(function(){t.close()}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmit=e,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popupForm.querySelectorAll(".popup__input")),n._submitButton=n._popup.querySelector(".popup__button"),n}return e=u,n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;v(_(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){v(_(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(t,e){this._submitButton.textContent=t?"Сохранение...":e}}],n&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupSubtitle=e._popup.querySelector(".popup-image__subtitle"),e._popupELementImage=e._popup.querySelector(".popup-image__element"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupSubtitle.textContent=t,this._popupELementImage.src=e,this._popupELementImage.alt=t,k(O(u.prototype),"open",this).call(this)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var L=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var T=function(){function t(e,n){var r=e.data,o=e.handleClickImage,i=e.userId,u=e.handleLikePost,a=e.handleOpenConfirm;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._name=r.name,this._link=r.link,this._userId=i,this._handleClickImage=o,this._handleLikePost=u,this._handleOpenConfirm=a,this._templateSelector=n,this._elementCard=this._getTemplate(),this._elementImage=this._elementCard.querySelector(".elements__image"),this._elementTitle=this._elementCard.querySelector(".elements__title"),this._buttonCardDelete=this._elementCard.querySelector(".elements__button-del"),this._buttonCardLike=this._elementCard.querySelector(".elements__button-like"),this._likesSum=this._elementCard.querySelector(".elements__likes-sum")}var e,n;return e=t,(n=[{key:"getId",value:function(){return this._data._id}},{key:"isLiked",value:function(){var t=this;return this._data.likes.some((function(e){return e._id===t._userId}))}},{key:"_updateLike",value:function(){this._likesSum.textContent=this._data.likes.length,this.isLiked()?this._buttonCardLike.classList.add("elements__button-like_active"):this._buttonCardLike.classList.remove("elements__button-like_active")}},{key:"setLikes",value:function(t){this._data.likes=t.likes,this._updateLike()}},{key:"checkOwnerCard",value:function(){this._data.owner._id!==this._userId&&this._buttonCardDelete.remove()}},{key:"deleteCard",value:function(){this._elementCard.remove(),this._elementCard=null}},{key:"createCard",value:function(){return this._elementTitle.textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._likesSum.textContent=this._data.likes.length,this._updateLike(),this.checkOwnerCard(),this._setEventListeners(),this._elementCard}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._buttonCardLike.addEventListener("click",(function(){t._handleLikePost(t)})),this._buttonCardDelete.addEventListener("click",(function(){t._handleOpenConfirm(t._elementCard)})),this._elementImage.addEventListener("click",(function(){t._handleClickImage(t._name,t._link)}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var A=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._aboutElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(t){return{name:t.name,about:t.about}}},{key:"setUserInfo",value:function(t){this._nameElement.textContent=t.name,this._aboutElement.textContent=t.about,this._avatarElement.src=t.avatar}},{key:"changeUserAvatar",value:function(t){var e=t.avatar;this._avatarElement.src=e}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,V(r.key),r)}}function U(t,e,n){return(e=V(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===D(e)?e:String(e)}var N=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,"_formElement",void 0),U(this,"_config",void 0),U(this,"_inputList",void 0),U(this,"_buttonElement",void 0),this._formElement=e,this._config=n,this._inputList=Array.from(e.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.name,"-error"));t.classList.add(this._config.inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.name,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t.checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this.setEventListeners()}},{key:"resetValid",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function z(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var H=new WeakSet,M=function(){function t(e){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=H),r.add(n),this._url=e.url,this._headers=e.headers}var e,n;return e=t,(n=[{key:"getAllInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(z(this,H,W))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(z(this,H,W))}},{key:"editUserProfile",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(z(this,H,W))}},{key:"postNewCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.title,link:t.link})}).then(z(this,H,W))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(z(this,H,W))}},{key:"changeLike",value:function(t,e){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:e?"DELETE":"PUT",headers:this._headers}).then(z(this,H,W))}},{key:"changeAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(z(this,H,W))}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t){return t.ok?t.json():t.json().then((function(t){return Promise.reject(t)}))}function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=X(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},K.apply(this,arguments)}function Q(t,e){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Q(t,e)}function X(t){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},X(t)}var Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=X(r);if(o){var n=X(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===$(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleCardDelete=e,n._form=n._popup.querySelector(".popup-confirm__form"),n._cardData={},n}return e=u,(n=[{key:"open",value:function(t){K(X(u.prototype),"open",this).call(this),this._cardData=t}},{key:"setEventListeners",value:function(){var t=this;K(X(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleCardDelete(t._cardData)}))}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var tt=null,et=new M({url:"https://mesto.nomoreparties.co/v1/cohort-73",headers:{"content-type":"application/json",authorization:"e8e3db00-8e62-4b7a-9288-f8f3414bebc7"}}),nt=new A({nameSelector:".profile__user-name",aboutSelector:".profile__user-description",avatarSelector:".profile__avatar"}),rt=new N(l,t),ot=new N(r,t),it=new N(s,t),ut=new g(".popup-create",(function(t){ut.loading(!0),et.postNewCard(t).then((function(t){var e=ft(t);pt.addItem(e)})).catch((function(t){return console.log(t)})).finally((function(){ut.loading(!1,"Создать")}))})),at=new j(".popup-image"),lt=new g(".popup-profile",(function(t){lt.loading(!0),et.editUserProfile(t).then((function(t){nt.setUserInfo(t)})).catch((function(t){console.log(t)})).finally((function(){lt.loading(!1,"Сохранить")}))})),ct=new Y(".popup-confirm",(function(t){et.deleteCard(t.getId()).then((function(){t.deleteCard(),ct.close()})).catch((function(t){return console.log(t)}))})),st=new g(".popup-avatar",(function(t){st.loading(!0),et.changeAvatar(t).then((function(t){nt.changeUserAvatar(t),st.close()})).catch((function(t){return console.log(t)})).finally((function(){st.loading(!1,"Сохранить")}))})),ft=function(t){var e=new T({data:t,handleClickImage:function(t,e){at.open(t,e)},userId:tt,handleLikePost:yt,handleOpenConfirm:function(){ct.open(e)}},"#elements__template");return e.createCard()},pt=new L({renderer:function(t){var e=ft(t);pt.addItem(e)}},".elements");function yt(t){et.changeLike(t.getId(),t.isLiked()).then((function(e){t.setLikes(e)})).catch((function(t){return console.log(t)}))}ot.enableValidation(),rt.enableValidation(),it.enableValidation(),at.setEventListeners(),lt.setEventListeners(),ut.setEventListeners(),ct.setEventListeners(),st.setEventListeners(),et.getUserInfo().then((function(t){nt.setUserInfo(t)})).catch((function(t){console.log(t)})),et.getAllInfo().then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];tt=o._id,pt.renderItems(i.reverse())})),c.addEventListener("click",(function(){rt.resetValid(),ut.open()})),o.addEventListener("click",(function(){et.getUserInfo().then((function(t){var e=nt.getUserInfo(t);i.value=e.name,u.value=e.about})).catch((function(t){return console.log(t)})),ot.resetValid(),lt.open()})),f.addEventListener("click",(function(){st.open(),it.resetValid()}))})();