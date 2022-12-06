import { DefaultTitleStrategy } from "@angular/router";
import { Club } from "./clubs";
import { Player } from "./players";
 
export class User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "admin" | "editor" | "user";
    friends: User[];
    favourites: Club[] | Player[];


    constructor(id: number, name: string, firstName: string, lastName: string, email: string, password: string, role: string) {
        this.id = id;
        this.userName = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role as "admin" | "editor" | "user"; 
        this.friends = [];
        this.favourites = [];
    }
}


