import { Component, OnInit } from '@angular/core';
import { UserListService } from "../server/user_server"
import {User} from "../server/user"
@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.scss'],
  providers:[]
})
export class ServerComponent implements OnInit {
  //  通过构造器注入
  constructor(private userServerDate:UserListService) { }
  uses : User[] = []
  ngOnInit(): void {
    this.uses = this.userServerDate.getUser();
  }

}
