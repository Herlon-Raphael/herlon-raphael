import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { MatDialog } from '@angular/material/dialog'
import { AddUserComponent } from './add-user/add-user.component';
import { ViewInfoUserComponent } from './view-info-user/view-info-user.component';
import { EditInfoUserComponent } from './edit-info-user/edit-info-user.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  users: User[] = [
  {
    id: 1,
    first_name: 'Herlon',
    second_name: 'Raphael',
    contact_data: {
      email: 'user1@mail.com',
      phone_number: '92991156627'
    },
    username: 'nick',
    document: '04490809000',
    document_type: 'cpf',
  },
  {  
    id: 7,
    first_name: 'João',
    second_name: 'Silva',
    contact_data: {
      email: 'user71@mail.com',
      phone_number: '92991156627'
    },
    username: 'teste',
    document: '04490809000',
    document_type: 'cpf',
  },
  {
    id: 6,
    first_name: 'Matheus',
    second_name: 'Rodrigues',
    contact_data: {
      email: 'user6@mail.com',
      phone_number: '92991156627'
    },
    username: 'aleatorio',
    document: '04490809000',
    document_type: 'cpf',
  },
  {
    id: 3,
    first_name: 'Roberto',
    second_name: 'Guimarães',
    contact_data: {
      email: 'user3@mail.com',
      phone_number: '92991156627'
    },
    username: 'filtro',
    document: '04490809000',
    document_type: 'cpf',
  },
  {
    id: 4,
    first_name: 'Julia',
    second_name: 'Soares',
    contact_data: {
      email: 'user4@mail.com',
      phone_number: '92991156627'
    },
    username: 'abcd',
    document: '04490809000',
    document_type: 'cpf',
  },
  {
    id: 5,
    first_name: 'Ana',
    second_name: 'Carolina',
    contact_data: {
      email: 'user5@mail.com',
      phone_number: '92991156627'
    },
    username: 'lie',
    document: '04490809000',
    document_type: 'cpf',
  },
  {
    id: 2,
    first_name: 'Abraão',
    second_name: 'Moraes',
    contact_data: {
      email: 'user2@mail.com',
      phone_number: '92991156627'
    },
    username: 'front',
    document: '04490809000',
    document_type: 'cpf',
  }]
  pagedUsers: User[] = [] 
  pageSize = 5; 
  currentPage = 0;
  searchValue = ''
  searchActive = false
  totalUsers: number = this.users.length

  constructor(
    private dialog: MatDialog,

  ) {

  }

  sortDirection: string = 'asc';
  sortedColumn: string = ''

  sortTable(column: string) {
    this.sortedColumn = column
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.pagedUsers.sort((a, b) => {
      const valueA = this.getPropertyValue(a, column);
      const valueB = this.getPropertyValue(b, column);
      return this.compareValues(valueA, valueB, this.sortDirection);
    });
  }

  getPropertyValue(object: any, property: string): any {
    return property.split('.').reduce((o, i) => o[i], object);
  }

  compareValues(valueA: any, valueB: any, direction: string): number {
    let comparison = 0;
    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }
    return direction === 'asc' ? comparison : -comparison;
  }

  ngOnInit() {
    this.updatePagedUsers();
    console.log(this.totalUsers)
  }

  updatePagedUsers() {
    const startIndex = this.currentPage * this.pageSize;
    this.pagedUsers = this.users.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: any): void {
    this.pagedUsers = this.users.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
    console.log(this.pagedUsers)
  }
  search(searchValue: any): void {
    if (searchValue !== '') {
      this.searchActive = true
      this.pagedUsers = this.users.filter((user: any) => {
        return (
          user.username.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    } else {
      this.updatePagedUsers()
      this.searchActive = false
    }

  }

  onPageSizeChange(value: any): void {
    this.pageSize = value.value
    this.updatePagedUsers();
  }

  addUser(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      maxWidth: '600px',
      panelClass: 'custom-dialog-container',
      data: { id: this.totalUsers },

    })
    dialogRef.afterClosed().subscribe({
      next: (success) => {
        if (success) {
          this.users.push(success)
          this.updatePagedUsers()
        }

      },
    })
  }
  seeInfoUser(user: User) {
    const dialogRef = this.dialog.open(ViewInfoUserComponent, {
      maxWidth: '600px',
      panelClass: 'custom-dialog-container',
      data: { user: user },

    })
    dialogRef.afterClosed().subscribe({
      next: (success) => {
        if (success) {
          this.users.push(success)
          this.updatePagedUsers()
        }

      },
    })
  }
  editInfoUser(user: User) {
    const dialogRef = this.dialog.open(EditInfoUserComponent, {
      maxWidth: '600px',
      panelClass: 'custom-dialog-container',
      data: { user: user },

    })
    dialogRef.afterClosed().subscribe({
      next: (success) => {
        if (success) {
          const userIndex = this.pagedUsers.findIndex(edit => edit.id === user.id)
          if (userIndex !== -1) {
            this.pagedUsers[userIndex].first_name = success.first_name
            this.pagedUsers[userIndex].second_name = success.second_name
            this.pagedUsers[userIndex].contact_data.email = success.contact_data.email
            this.pagedUsers[userIndex].contact_data.phone_number = success.contact_data.phone_number
            this.pagedUsers[userIndex].username = success.username
          }
          this.updatePagedUsers()
        }

      },
    })
  }
  deleteUser(id: number) {
    console.log(id)
    this.users = this.users.filter(user => user.id !== id);
    this.updatePagedUsers()

  }

}
