import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Author } from '../../Author'



@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  @Output() onAddAuthor: EventEmitter<Author> = new EventEmitter()
  id: string
  name: string
  showAddAuthor: boolean = false
  subscription: Subscription


  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddAuthor = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.id || !this.name) {
      alert('Please add an author!')
      return
    }

    const newAuthor: Author = {
      id: this.id,
      name: this.name
    }

    this.onAddAuthor.emit(newAuthor)
    this.id = '',
    this.name = ''
  }
}
