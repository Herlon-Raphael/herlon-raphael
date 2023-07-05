import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user';

@Component({
  selector: 'app-view-info-user',
  templateUrl: './view-info-user.component.html',
  styleUrls: ['./view-info-user.component.css']
})
export class ViewInfoUserComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
    console.log(this.data.user)
  }

}
