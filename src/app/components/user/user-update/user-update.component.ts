import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userListControl = new FormControl();

  user: User[] = [];
  selectedUser: User | undefined;

  userUpdateForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
  });

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));
    this.user = this.userService.getUsers();

    this.selectedUser = this.user.find(user => user.id === userIdFromRoute);
  }

  onSubmit() {
    this.selectedUser!.userName = this.userUpdateForm.value.username;
    this.selectedUser!.password = this.userUpdateForm.value.password;
    this.selectedUser!.email = this.userUpdateForm.value.email;
    this.selectedUser!.firstName = this.userUpdateForm.value.firstName;
    this.selectedUser!.lastName = this.userUpdateForm.value.lastName;
    this.userService.updateUser(this.selectedUser!);
  }

}
