
export class Comment {
    userId: number
    productId: number
    text: string

    constructor(userId: number, productId: number, text: string) {
        this.userId = userId;
        this.productId = productId;
        this.text = text;
    }
}