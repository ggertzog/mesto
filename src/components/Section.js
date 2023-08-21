export default class Section {
    constructor ({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    //метод который вставляет элемент в ДОМ-дерево
    addItem(element) {
        this._container.prepend(element);
    }
    //метод forEach с присвоением инструкции renderer описанной в index для определенного элемента
    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }
}