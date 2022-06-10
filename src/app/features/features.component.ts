import { Component, OnInit } from '@angular/core';

// utils
import messages from "../../utils/messages";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  messages = messages.en

  constructor() { }

  ngOnInit(): void {
  }

}
