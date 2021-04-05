class KioskCalc {
    constructor(Dress, Quantity) {
        this.Dress = "Casual";
        this.Quantity = 4;

    }

    getDetails() {
        return `${this.Dress} ${this.Quantity} for dollars ${100*this.Quantity}`;
    }
}
var kioskCalc = new KioskCalc("Casual", 4)
console.log(kioskCalc.getDetails());