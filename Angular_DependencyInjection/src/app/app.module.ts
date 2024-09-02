import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessagesService } from './services/messages.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  declarations: [
    AppComponent,
    
  ],
  providers:[
    MessagesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
