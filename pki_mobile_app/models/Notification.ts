
export class Notification {
    id: number
    userId: number
    date: Date
    text: string
    status?: boolean

    constructor(id: number, userId: number, date: Date, text: string, status: boolean) {
        this.id = id
        this.userId = userId;
        this.date = date;
        this.text = text;
        this.status = status;
    }
}