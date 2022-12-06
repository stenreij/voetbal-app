import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent implements OnInit {
  userListForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    role: new FormControl(),
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userListForm.controls.role.setValue("user");
  }

  addUser() {
    this.userService.addUser(this.userListForm.value.username, 
      this.userListForm.value.password,
      this.userListForm.value.email,
      this.userListForm.value.firstName,
      this.userListForm.value.lastName,
      this.userListForm.value.role);
  }

}
