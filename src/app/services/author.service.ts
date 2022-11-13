import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Author } from '../Author';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl: string = "http://localhost:8080/authors"
  
  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl)
  }

  deleteAuthor(author: Author): Observable<Author> {
    const url = `${this.apiUrl}/${author.id}`
    return this.http.delete<Author>(url)
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.apiUrl, author)
  }
}
