import { Component,OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { error } from 'console';
import { post } from './interfaces/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessagesService]
})
export class AppComponent implements OnInit{
  title = 'Dependency Injection';
  messages:string[]=[]
  posts:post[]=[]
  constructor(private message:MessagesService)
  {
    this.messages=message.getMessages();
  }

  ngOnInit(){
      this.message.getposts().subscribe((response:post[])=>
        {
          console.log(response[0].id)
          this.posts=response;
        },
        (error)=>{
          console.log(error)
        }
      )
  }
}
