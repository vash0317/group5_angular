import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users: any = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.handleGetUsers();
  }

  handleGetUsers() {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

}
