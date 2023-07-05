import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUser: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.addUser = this._formBuilder.group({
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      username: ['', Validators.required],
      document: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }

  addNewUser() {
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
        document_type: this.addUser.value.document.lenght === 11 ? 'cpf' : 'cnpj',
      }
      this.dialogRef.close(newUser)
    }
  }

}
