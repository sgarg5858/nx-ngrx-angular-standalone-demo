import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '@demo-angular-ngrx/users/domain'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers()
  {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
  getUserDetails(userId:string)
  {
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }
}
