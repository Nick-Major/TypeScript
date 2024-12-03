import Suitable from "./Suitable";

export default class Cart {
    private items: Suitable[] = [];

    addItem(item: Suitable): void {
        this.items.push(item);
    }

    getItems(): Suitable[] {
        return[...this.items];
    }

    getTotalPrice(): number {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }

    getTotalPriceWithDiscount(): number {
        let totalPrice = 0;
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i].discount) {
                totalPrice += this.items[i].price * (1 - this.items[i].discount / 100);
            } else {
                totalPrice += this.items[i].price;
            }
        }

        return totalPrice;
    }

    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
};
