import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from '../../model/message';
import {tap} from 'rxjs/operators';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent  implements OnInit {

 
  showMessages = false;

  errors$: Observable<string[]> | undefined;


  constructor(public messagesService: MessageService) {

      console.log("Created messages component");

  }

  ngOnInit() {
      this.errors$ = this.messagesService.errors$
          .pipe(
              tap(() => this.showMessages = true)
          );

  }


  onClose() {
      this.showMessages = false;

  }

}
