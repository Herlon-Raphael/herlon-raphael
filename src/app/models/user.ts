export interface User {
    id: number
    first_name: string
    second_name: string
    contact_data: ContactData
    username: string
    document: string
    document_type: string
  }
  
  export interface ContactData {
    email: string
    phone_number: string
  }