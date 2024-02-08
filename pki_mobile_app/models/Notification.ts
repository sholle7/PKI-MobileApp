
export class Notification {
    userId: number
    date: Date
    text: string
    status?: boolean

    constructor(userId: number, date: Date, text: string, status: boolean) {
        this.userId = userId;
        this.date = date;
        this.text = text;
        this.status = status;
    }
}