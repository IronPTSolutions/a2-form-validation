import { User } from './shared/models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<User> = [];

  onAddUser(user: User): void {
    this.users.push(user);
  }

  onClickDelete(user: User) {
    this.users = this.users.filter((u) => u !== user);
  }
}
