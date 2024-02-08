
export class Cart {
    id: number
    userId: number
    hashmapOfProducts: Map<number, number>

    constructor(id: number, userId: number, hashmapOfProducts: Map<number, number>) {
        this.id = id;
        this.userId = userId;
        this.hashmapOfProducts = hashmapOfProducts;
    }
}