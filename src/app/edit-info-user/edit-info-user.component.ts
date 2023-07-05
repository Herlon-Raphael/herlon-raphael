import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-info-user',
  templateUrl: './edit-info-user.component.html',
  styleUrls: ['./edit-info-user.component.css']
})
export class EditInfoUserComponent implements OnInit {
  addUser: FormGroup
  documentDisabled: boolean = false

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditInfoUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.addUser = this._formBuilder.group({
      first_name: [this.data.user.first_name, Validators.required],
      second_name: [this.data.user.second_name, Validators.required],
      email: [this.data.user.contact_data.email, Validators.required],
      phone_number: [this.data.user.contact_data.phone_number, Validators.required],
      username: [this.data.user.username, Validators.required],
      document: new FormControl({ value: this.data.user.document, disabled: true }),
      })
  }

  ngOnInit(): void {
  }

  editUser() {
    if (this.addUser.valid) {
      const newUser = {
        id: this.data.id + 1,
        first_name: this.addUser.value.first_name,
        second_name: this.addUser.value.second_name,
        contact_data: {
          email: this.addUser.value.email,
          phone_number: this.addUser.value.phone_number,
        },
        username: this.addUser.value.username,
        document: this.addUser.value.document,
      }
      this.dialogRef.close(newUser)
    }
  }
}
