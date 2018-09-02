export class User {
    firstName: string;
    lastName: string;
    email: string;
    username: string;

    constructor(json: any) {
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.email = json.email;
        this.username = json.username;    
    }
}