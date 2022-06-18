import { Component, OnInit } from '@angular/core';

// utils
import messages from '../../utils/messages'
import constants from "../../utils/constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messages = messages.en
  constants = constants

  constructor() { }

  ngOnInit(): void {
  }

}
