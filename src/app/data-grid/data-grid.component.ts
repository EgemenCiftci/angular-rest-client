import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  @Input() users: User[];
  @Output() editClick: EventEmitter<User> = new EventEmitter();
  @Output() removeClick: EventEmitter<User> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  edit(user: User) {
    this.editClick.emit(user);
  }

  remove(user: User) {
    this.removeClick.emit(user);
  }
}
