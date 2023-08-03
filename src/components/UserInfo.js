export default class UserInfo {
    constructor({nameSelector, aboutSelector}) {
        this.nameElement = document.querySelector(nameSelector);
        this.aboutElement = document.querySelector(aboutSelector);
    }
    getUserInfo() {
        return {
            name: this.nameElement.textContent,
            about: this.aboutElement.textContent,
        }
    }
    setUserInfo({name, about}) {
        this.nameElement.textContent = name;
        this.aboutElement.textContent = about;
    }
}