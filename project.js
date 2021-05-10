class Mkulima {
    constructor(farms, products, orders) {
        this.farms = [];
        this.products = [];
        this.orders = [];
    }
    addFarm(farmId, name, farmer, phone, address) {
        var farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address,
        }
        this.farms.push(farm);
        return this.farms
    }
    getFarm(farmId) {
        for (var a = 0; a < this.farms.length; a++) {
            var farm = this.farms[a];
            if (farm.farmId == farmId) {
                return farm;
            }
        }
    }
    removeFarm(farmId) {
        var farm = this.getFarm(farmId);
        return delete this.farm(farmId);
    }

    updateFarm(farmId, name, farmer, phone, address) {
        var newFarm = this.farms.find(newFarm => newFarm.farmer == "Loyce")
        newFarm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address,
        }
        this.farms.push(newFarm);
        return this.newFarms
    }
    addProduct(productId, name, price) {
        var product = {
            productId: productId,
            name: name,
            price: price,
        }
        return this.products.push(product);
    }
    getProduct(productId) {
        for (var m = 0; m < this.product.length; m++) {
            var product = this.farms[m];
            if (farm.farmId == farmId) {
                return product;
            }
        }
    }
    removeProduct(productId) {
        var product = this.getProducts(productId);
        return delete this.farms(item);
    }
    updateProduct(productId, name, price) {
        var newProduct = this.products.find(newProduct => newProduct.name == "seeds")
        newProduct = {
            productId: productId,
            name: name,
            price: price,
        }
        return newProduct;
    }
    printProduct() {
        for (product in this.products) {
            console.log([product.name + " " + product.price])
        }
    }
    calculateOrderCost(productId, quantity) {
        var total = this.products.find(total => productId === productId);
        return cost.price * quantity;
    }
}
var orders = new Mkulima();
console.log(orders.addFarm("4682723", "sloppy", "loyce", "0706387923", "lva452"));
console.log(orders.addFarm("683251", "hilly", "velma", "0704234675", "vla352"));
console.log(orders.getFarm("683251"));
console.log(orders.getFarm("56543"));
console.log(orders.removeFarm("4682723"));
console.log(orders.updateProduct("2401", "fruits", 120));
console.log(orders.addProduct("y45ew", "veges", 50));
order.printProduct();
console.log(order.calculateOrderCost(220, 4));