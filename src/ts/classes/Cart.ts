import Acquired from "../interfaces/Acquired";

export default class Cart {
    items: Acquired[] = [];

    addItem(item: Acquired): void {
        this.items.push(item);
    }

    getItems(): Acquired[] {
        return [...this.items];
    }

    getTotalPrice(): number {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }
    
    getTotalPriceWithDiscount(discount: number): number {
        return this.getTotalPrice() * (1 - discount / 100);
    }

    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}
