import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddAuthor: boolean = false
  private subject = new Subject<any>()


  constructor() { }

  toggleAddAuthor(): void {
    this.showAddAuthor = !this.showAddAuthor
    this.subject.next(this.showAddAuthor)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }

}
