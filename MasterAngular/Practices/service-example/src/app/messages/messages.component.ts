import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  imports:[CommonModule]
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
