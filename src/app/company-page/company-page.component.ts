import { Component, OnInit } from '@angular/core';

// utils
import messages from "../../utils/messages";

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  messages = messages.en

  constructor() { }

  ngOnInit(): void {
  }

}
