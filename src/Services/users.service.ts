import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { users } from 'src/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  url="http://localhost:3000/users"


  getUsers()
  {
    return this.http.get<users[]>(this.url);
  }

 
    deleteUser(id: string): Observable<users[]> {
      const deleteUrl = `${this.url}/${id}`;
      return this.http.delete<users[]>(deleteUrl);
    }

    updateUser(user: any): Observable<users[]> {
      const updateUrl = `${this.url}/${user.id}`;
      return this.http.put<users[]>(updateUrl, user);
    }

    addUser(user: any): Observable<users[]> {
      return this.http.post<users[]>(this.url, user)
        .pipe(
          catchError((error) => {
            console.error('Error adding user:', error);
            throw error;
          })
        );
    }
  
}
