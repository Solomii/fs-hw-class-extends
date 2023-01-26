/*
 Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
У фізичного товара додається властивість вага.
У віртуального товара додається властивість розмір пам'яті.
Зміниться метод повернути інформацію про товар.
 */

class Product {
    constructor(name, price, currency, quantity) {
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.quantity = quantity;
    }

    set name(value) {
        if (typeof value !== "string") {
            throw new TypeError("name must be string!");
        }

        this._name = value;
    }
    get name() {
        return this._name;
    }

    set price(value) {
        if (typeof value !== "number") {
            throw new TypeError("price must be number!");
        }

        this._price = value;
    }

    get price() {
        return this._price;
    }

    set currency(value) {
        if (typeof value !== "string") {
            throw new TypeError("name must be string!");
        }

        this._currency = value;
    }
    get currency() {
        return this._currency;
    }

    set quantity(value) {
        if (typeof value !== "number") {
            throw new TypeError("quantity must be number!");
        }

        this._quantity = value;
    }

    get quantity() {
        return this._quantity;
    }

    getInformationAboutProduct() {
        return `Name product: ${this.name} - ${this.price}${this.currency}, quantity in stock: ${this.quantity}`;
    }

    buy() {
        //доробити!!!
        return `you need pay: ${this._price * this._quantity}${this._currency}`;
    }

    static isProduct(obj) {
        return obj instanceof Product;
    }
}

try {
    const productOne = new Product("eggs", 8, "uah", 10);
    console.log(productOne.getInformationAboutProduct());
    console.log(productOne.buy(20, 10));
} catch (error) {
    console.log(error);
}

class PhysicalProduct extends Product {
    constructor(name, price, currency, quantity, weight) {
        super(name, price, currency, quantity);
        this.weight = weight;
    }

    set weight(value) {
        if (typeof value !== "number") {
            throw new TypeError("weight must be number!");
        }

        this._weight = value;
    }

    get weight() {
        return this._weight;
    }

    getInformationAboutProduct() {
        return `Physical product: ${this.name} - ${this.price}${this.currency}, quantity in stock: ${this.quantity}, weight: ${this.weight}`;
    }
}

try {
    const productTwo = new PhysicalProduct("onion", 20, "uah", 20, 5);
    console.log(productTwo.getInformationAboutProduct());
    console.log(productTwo.buy(20, 3));
} catch (error) {
    console.log(error);
}

class VirtualProduct extends Product {
    constructor(name, price, currency, quantity, memory) {
        super(name, price, currency, quantity);
        this.memory = memory;
    }

    set memory(value) {
        if (typeof value !== "number") {
            throw new TypeError("weight must be number!");
        }

        this._memory = value;
    }

    get memory() {
        return this._memory;
    }

    getInformationAboutProduct() {
        return `Virtual product: ${this.name} - ${this.price}${this.currency}, quantity in stock: ${this.quantity}, memory: ${this.memory}`;
    }
}

try {
    const productThree = new VirtualProduct("virtualGood", 100, "uah", 5, 20);
    console.log(productThree.getInformationAboutProduct());
    console.log(productThree.buy(20, 3));
} catch (error) {
    console.log(error);
}
