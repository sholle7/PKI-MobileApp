export enum Types {
    cake,
    pastry
}

export class Product {
    id: number
    name: string
    type: Types
    price: number
    description: string
    pictureURL: string

    constructor(id: number, name: string, type: Types, price: number, description: string, pictureURL: string) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.price = price;
      this.description = description;
      this.pictureURL = pictureURL;
    }
}