import { Injectable } from "@angular/core";
import { User } from "../../core/user";

@Injectable({
    providedIn: 'root',
})

export class UserService {
    users = [
        new User(1, 'Sten06',  'Sten', 'Reijerse', 's@s.com', '1234', 'admin'),
        new User(2, 'Kalle070', 'Kalle', 'van de Visser', 'k@k.com', '1234', 'admin'),
        new User(3, 'Jaapje',  'Jaap', 'van der Veen', 'j@j.com', '1234', 'editor'),
        new User(4, 'Pietje',  'Piet', 'Post', 'p@p.com', '1234', 'user'),
        new User(5, 'HenkDeTank', 'Henk', 'Harmsen', 'h@h.com', '1234', 'user'),
        new User(6, 'AnnaX15', 'Anna', 'Bel', 'a@a.com', '1234', 'user'), 
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
    getUser(id: number){
        return this.users.find(user => user.id === id);
    }
    addUser(username: string, password: string, email: string, firstName: string, lastName: string, role: string) {
        this.users.push(new User(this.users.length + 1, username, firstName, lastName, email, password, role));
    }
    updateUser(user: User) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users[index] = user;
        }
    }
}
