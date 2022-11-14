import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { AboutComponent } from './components/about/about.component';
import { AuthorService } from './services/author.service';
import { UiService } from './services/ui.service';

const appRoutes: Routes = [
  { path: '', component: AuthorsComponent },
  { path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    AuthorsComponent,
    AddAuthorComponent,
    AuthorItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    AuthorService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
