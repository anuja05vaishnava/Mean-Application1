import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PostListComponent} from '../app/post/post-list/post-list.component'
import { HeaderComponent} from '../app/header/header.component'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { MatExpansionModule } from '@angular/material';
import { PostsService } from './post/posts.service';







@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CreatePostComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
