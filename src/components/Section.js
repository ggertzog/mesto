export default class Section {
    constructor ({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    //метод который вставляет элемент в ДОМ-дерево
    addItem(element) {
        this._container.prepend(element);
    }
    //метод forEach с присвоением инструкции renderer описанной в index для определенного элемента
    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }
}