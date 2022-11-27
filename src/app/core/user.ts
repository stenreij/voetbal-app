import { Club } from "./clubs";
import { Player } from "./players";
 
export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    friends: User[];
    favourites: Club[] | Player[];


    constructor(id: number, name: string, email: string, password: string, isAdmin: boolean,) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.friends = [];
        this.favourites = [];
    }

    addFriend(friend: User) {
        this.friends.push(friend);
    }
    removeFriend(friend: User) {
        const index = this.friends.indexOf(friend);
        if (index > -1) {
            this.friends.splice(index, 1);
        }
    }
    getFriends() {
        return this.friends;
    }
    getFriend(id: number) {
        return this.friends.find(friend => friend.id === id);
    }
}


