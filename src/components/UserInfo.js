export default class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._aboutElement.textContent,
        }
    }

    setUserInfo(data) {
        this._nameElement.textContent = data.name;
        this._aboutElement.textContent = data.about;
        this._avatarElement.src = data.avatar;
    }

    changeUserAvatar({avatar}) {
        this._avatarElement.src = avatar;
    }
}