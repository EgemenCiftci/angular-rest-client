import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  @Input() user: User;
  @Output() okClick = new EventEmitter<User>();
  @Output() cancelClick = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}

  ok() {
    this.okClick.emit(this.user);
  }

  cancel() {
    this.cancelClick.emit(this.user);
  }
}
