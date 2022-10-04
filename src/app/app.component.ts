import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { AppService } from './app.service';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users$: Observable<User[]>;
  user = {
    id: undefined,
    name: this.generateRandomName(),
    email: `${this.generateRandomName()}@test.com`,
    gender: 'male',
    status: 'active',
  };

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  async add() {
    await firstValueFrom(this.appService.addUser(this.user));
    this.getUsers();
  }

  async remove(user: User) {
    await firstValueFrom(this.appService.removeUser(user.id));
    this.getUsers();
  }

  async edit(user: User) {
    await firstValueFrom(this.appService.editUser(user));
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.appService.getUsers();
  }

  getObject(json: string): any {
    return JSON.parse(json);
  }

  generateRandomName(): string {
    return Math.random().toString(36).substring(2, 7);
  }
}
