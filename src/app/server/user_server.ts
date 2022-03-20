// 注入
import { Injectable } from "@angular/core"; 
import { User } from "../server/user";

@Injectable()
export class UserListService{
    users: User[] = [
        { name: 'alin', age: 19 },
        { name: 'Bibo', age: 20 },
        { name: 'elie', age: 21 }
    ];
    // 返回 
    getUser():User[] {
        return this.users;
    }
}
