"use strict";
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

        if (value.length === 0) {
            throw new RangeError("missing name");
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

        if (value < 0) {
            throw new RangeError("price can't be negative");
        }

        this._price = value;
    }

    get price() {
        return this._price;
    }

    set currency(value) {
        if (typeof value !== "string") {
            throw new TypeError("currency must be string!");
        }

        if (value.length === 0) {
            throw new RangeError("missing currency");
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

        if (value < 0) {
            throw new RangeError("quantity can't be negative");
        }

        this._quantity = value;
    }

    get quantity() {
        return this._quantity;
    }

    getInformationAboutProduct() {
        return `Name product: ${this.name} - ${this.price}${this.currency}, quantity in stock: ${this.quantity}`;
    }

    buy(amountValue) {
        if (
            amountValue === "" ||
            amountValue === null ||
            amountValue <= 0 ||
            Number.isNaN(amountValue)
        ) {
            return "error";
        }
        if (this.quantity <= amountValue) {
            return null;
        }
        this.quantity -= amountValue;
        return `you need to pay: ${this.price * amountValue}${
            this.currency
        } for ${amountValue} ${this.name}`;
    }

    static isProduct(obj) {
        return obj instanceof Product;
    }
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

        if (value < 0) {
            throw new RangeError("weight can't be negative");
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

class VirtualProduct extends Product {
    constructor(name, price, currency, quantity, memory) {
        super(name, price, currency, quantity);
        this.memory = memory;
    }

    set memory(value) {
        if (typeof value !== "number") {
            throw new TypeError("weight must be number!");
        }

        if (value < 0) {
            throw new RangeError("memory can't be negative");
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
    const productOne = new Product("eggs", 8, "uah", 10);
    console.log(productOne.getInformationAboutProduct());
    console.log(productOne.buy(8));
} catch (error) {
    console.log(error);
}

try {
    const productOnePriceNegative = new Product("eggs", -8, "uah", 10);
    console.log(productOnePriceNegative.getInformationAboutProduct());
    console.log(productOnePriceNegative.buy(8));
} catch (error) {
    console.log(error);
}

try {
  const productOnePriceTypeofError = new Product("eggs", "dfd", "uah", 10);
  console.log(productOnePriceTypeofError.getInformationAboutProduct());
  console.log(productOnePriceTypeofError.buy(8));
} catch (error) {
  console.log(error);
}

try {
    const productOneQuantityNegative = new Product("eggs", 8, "uah", -10);
    console.log(productOneQuantityNegative.getInformationAboutProduct());
    console.log(productOneQuantityNegative.buy(8));
} catch (error) {
    console.log(error);
}

try {
    const productOneMissingName = new Product("", 8, "uah", 10);
    console.log(productOneMissingName.getInformationAboutProduct());
    console.log(productOneMissingName.buy(8));
} catch (error) {
    console.log(error);
}

try {
  const productOneTypeofErrorName = new Product(3, 8, "uah", 10);
  console.log(productOneTypeofErrorName.getInformationAboutProduct());
  console.log(productOneTypeofErrorName.buy(8));
} catch (error) {
  console.log(error);
}

try {
    const productOneMissingCurrency = new Product("eggs", 8, "", 10);
    console.log(productOneMissingCurrency.getInformationAboutProduct());
    console.log(productOneMissingCurrency.buy(8));
} catch (error) {
    console.log(error);
}

try {
  const productOneTypeofErrorCurrency = new Product("eggs", 8, null, 10);
  console.log(productOneTypeofErrorCurrency.getInformationAboutProduct());
  console.log(productOneTypeofErrorCurrency.buy(8));
} catch (error) {
  console.log(error);
}

try {
    const productTwo = new PhysicalProduct("onion", 20, "uah", 20, 5);
    console.log(productTwo.getInformationAboutProduct());
    console.log(productTwo.buy(3));
} catch (error) {
    console.log(error);
}

try {
    const productTwoNegative = new PhysicalProduct("onion", 20, "uah", 20, -5);
    console.log(productTwoNegative.getInformationAboutProduct());
    console.log(productTwoNegative.buy(3));
} catch (error) {
    console.log(error);
}

try {
    const productThree = new VirtualProduct("eBook", 20, "usd", 5, 20);
    console.log(productThree.getInformationAboutProduct());
    console.log(productThree.buy(2));
} catch (error) {
    console.log(error);
}

try {
    const productThreeNegative = new VirtualProduct("eBook", 20, "usd", 5, -20);
    console.log(productThreeNegative.getInformationAboutProduct());
    console.log(productThreeNegative.buy(2));
} catch (error) {
    console.log(error);
}
