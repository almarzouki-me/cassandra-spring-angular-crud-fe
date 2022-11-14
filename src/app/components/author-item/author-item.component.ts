import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../../Author'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {
  @Input() author: Author 
  @Output() onDeleteAuthor: EventEmitter<Author> = new EventEmitter()
  faTimes = faTimes

  
  constructor() { 
  }


  ngOnInit(): void {
  }

  onDelete(author: Author): void {
    this.onDeleteAuthor.emit(author)  
  }
  
}
