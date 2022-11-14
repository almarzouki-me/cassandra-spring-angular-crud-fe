import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service'
import { Author } from '../../Author';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = []
  
  
  constructor(private authorService: AuthorService) { 
  
  }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((authors) => {      
      this.authors = authors
    } )
  }

  ngOnChanges(): void {
  }

  deleteAuthor(author: Author) {
    this.authorService.deleteAuthor(author).subscribe(() => this.authors = 
    this.authors.filter(a => a.id !== author.id))
  }


  addAuthor(author: Author) {      
    this.authorService.addAuthor(author).subscribe((res) => {
      (this.authors.push(author))
    })
  }
}
