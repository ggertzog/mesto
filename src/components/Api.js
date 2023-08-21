export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    #Responce(res) {
        return res.ok ? res.json() : res.json().then(errData => Promise.reject(errData))
    }

    getAllInfo() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()])
    }
   
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
            .then(this.#Responce)
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
            .then(this.#Responce)
    }

    editUserProfile(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about:  data.about
            }),
        })
            .then(this.#Responce)
    }

    postNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link
            }),
        })
            .then(this.#Responce)
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this.#Responce)
    }

    changeLike(cardId, isLiked) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: isLiked ? 'DELETE' : 'PUT',
            headers: this._headers
        })
        .then(this.#Responce)
    }

    changeAvatar(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatar)
        })
        .then(this.#Responce)
    }
}