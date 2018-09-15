import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user: User = new User();
  @Output() addUser: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(): void {
    this.addUser.emit(this.user);
    this.user = new User();
  }
}
