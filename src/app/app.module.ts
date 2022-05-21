import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { DataGridComponent } from './data-grid/data-grid.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, AddEditComponent, DataGridComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
