class KioskCalc {
    constructor(Wear, Quantity) {
        this.Wear = "Dress";
        this.Quantity = 3;
        this.Shoes = "Shoes";;
        this.Quantity1 = 2;

    };

    getTotalDetails() {
        return `${this.Quantity} ${this.Wear} for dollars ${100*this.Quantity}`;
    }
    getTotalValue() {
        return `${ this.Quantity1 } ${ this.Shoes }for dollars ${ 80 * this.Quantity1}`;

    }


}
kioskCalc = new KioskCalc("Dress", "Shoes");

console.log(kioskCalc.getTotalDetails());
console.log(kioskCalc.getTotalValue());