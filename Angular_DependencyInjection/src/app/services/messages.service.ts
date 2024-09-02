import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post} from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private apiurl="https://jsonplaceholder.typicode.com/posts";
  constructor(private httpclient:HttpClient ) { }
  getMessages()
  {
    return ['message1','message2','message3']
  }
  getposts():Observable<post[]>
  {
    return this.httpclient.get<post[]>(this.apiurl);
  }


}
