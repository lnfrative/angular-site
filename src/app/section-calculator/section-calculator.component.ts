import { Component, OnInit } from '@angular/core';

// utils
import messages from "../../utils/messages";

@Component({
  selector: 'app-section-calculator',
  templateUrl: './section-calculator.component.html',
  styleUrls: ['./section-calculator.component.css']
})
export class SectionCalculatorComponent implements OnInit {
  messages = messages.en

  constructor() { }

  ngOnInit(): void {
  }

}
