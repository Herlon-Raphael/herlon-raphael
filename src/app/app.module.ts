import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddUserComponent } from './add-user/add-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { ViewInfoUserComponent } from './view-info-user/view-info-user.component'
import { MatButtonModule } from '@angular/material/button';
import { EditInfoUserComponent } from './edit-info-user/edit-info-user.component'






@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ViewInfoUserComponent,
    EditInfoUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
