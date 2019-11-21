'use strict'

class Sweet {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

class Candy extends Sweet {
    constructor(name, weight, typeCandy) {
        super(name, weight);
        this.typeCandy = typeCandy;
    }
}

class Chocolate extends Sweet {
    constructor(name, weight, persentOfCacao) {
        super(name, weight);
        this.persentOfCacao = persentOfCacao;
    }
}

class Marmalade extends Sweet {
    constructor(name, weight, color) {
        super(name, weight);
        this.color = color;
    }
}

var raffaello = new Candy('Raffaello', 40, 'waffle');
var alpenliebe = new Candy('Alpenliebe', 250, 'caramel');
var kinder = new Chocolate('Kinder Surprise', 20, 12);
var haribo = new Marmalade('Haribo', 140, 'red');

class Gift {
    constructor(giftName) {
        this.giftName = giftName;
        this.giftWeight = 0;
        this.sweets = [];
    }

    addSweets(sweet) {
        this.sweets.push(sweet);
        this.giftWeight += sweet.weight;
        return this;
    }

    sortByWeight() {
        this.sweets.sort((firstSweet, secondSweet) => (firstSweet.weight > secondSweet.weight) ?
            1 : ((secondSweet.weight > firstSweet.weight) ? -1 : 0));

    }

    findByName(search) {
        var searchingWord = 'Found sweet: ';
        this.sweets.forEach(
            function (item) {
                if (item.name.toLowerCase() === search.toLowerCase()) {
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            searchingWord += item[key] + ' ';
                        }
                    }
                    searchingWord += '\n';
                }
            }
        );
        return searchingWord;
    }

    openGift() {
        var collectedGift = this.giftName + '\nWeight: ' + this.giftWeight + '\nConsists of: ';
        this.sweets.forEach(
            function (item) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        collectedGift += item[key] + ' ';
                    }
                }
                collectedGift += '\n';
            }
        );
        return collectedGift;
    }
}

var gift = new Gift('KidsGift');
gift.addSweets(alpenliebe).addSweets(raffaello).addSweets(haribo).addSweets(kinder);
gift.sortByWeight();
console.log(gift.openGift());
console.log(gift.findByName('Raffaello'));