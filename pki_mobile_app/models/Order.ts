export class Order {
    id: number
    userId: number
    cartId: number
    status: boolean | null
    products: Map<number, number>
    
    constructor(id: number, userId: number, cartId: number, status: boolean | null) {
        this.id = id;
        this.userId = userId;
        this.cartId = cartId;
        this.status = status;
        this.products = new Map<number, number>();
    }
}
