import { Component, OnInit } from '@angular/core';

// utils
import messages from "../../utils/messages";

@Component({
  selector: 'app-income-calculator',
  templateUrl: './income-calculator.component.html',
  styleUrls: ['./income-calculator.component.css']
})
export class IncomeCalculatorComponent implements OnInit {
  messages = messages.en

  constructor() { }

  ngOnInit(): void {
  }

}
