import { Injectable } from "@angular/core";
import { User } from "../../core/user";

@Injectable({
    providedIn: 'root',
})

export class UserService {
    users = [
        new User(1, 'Sten', 's@s.com', '1234', true),
        new User(2, 'Kalle', 'k@k.com', '1234', false),
        new User(3, 'Pelle', 'p@p.com', '1234', false),
        new User(4, 'Lisa', 'l@l.com', '1234', false),
        new User(5, 'Anna', 'a@a.com', '1234', false),
    ]

    getUsers() {
        return this.users;
    }
    deleteUser(user: User) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
        }
    }
    getUser(id: number) {
        return this.users.find(user => user.id === id);
    }
    addUser(user: User) {
        this.users.push(user);
    }
    updateUser(user: User) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users[index] = user;
        }
    }
}
