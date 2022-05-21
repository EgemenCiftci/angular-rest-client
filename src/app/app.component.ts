import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { AppService } from './app.service';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>;
  user = {
    id: undefined,
    name: this.generateRandomName(),
    email: `${this.generateRandomName()}@test.com`,
    gender: 'male',
    status: 'active',
  };
  addUserSubscription: Subscription;
  removeUserSubscription: Subscription;
  editUserSubscription: Subscription;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.addUserSubscription?.unsubscribe();
    this.removeUserSubscription?.unsubscribe();
    this.editUserSubscription?.unsubscribe();
  }

  add() {
    this.addUserSubscription = this.appService
      .addUser(this.user)
      .subscribe(() => this.getUsers());
  }

  remove(user: User) {
    this.removeUserSubscription = this.appService
      .removeUser(user.id)
      .subscribe(() => this.getUsers());
  }

  edit(user: User) {
    this.editUserSubscription = this.appService
      .editUser(user)
      .subscribe(() => this.getUsers());
  }

  getUsers() {
    this.users$ = this.appService.getUsers();
  }

  getObject(json: string): any {
    return JSON.parse(json);
  }

  generateRandomName(): string {
    return Math.random().toString(36).substr(2, 5);
  }
}
