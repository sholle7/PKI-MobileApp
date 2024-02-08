export enum Roles {
    buyer,
    employee
}

export class User {
    id: number
    firstName: string
    lastName: string
    contactNumber: string
    address: string
    username: string
    password: string;
    role: Roles;

    constructor(id: number, firstName: string, lastName: string, contactNumber: string, address: string, username: string, password: string, role: Roles) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.contactNumber = contactNumber;
      this.address = address;
      this.username = username;
      this.password = password;
      this.role = role
    }
}