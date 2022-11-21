import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../../../core/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  UserService: UserService = new UserService;
  User = this.UserService.getUsers();
  selectedUser: User | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));

    this.selectedUser = this.UserService.users.find(user => user.id === userIdFromRoute);
  }

  constructor(
    private route: ActivatedRoute,
  ) { }
}