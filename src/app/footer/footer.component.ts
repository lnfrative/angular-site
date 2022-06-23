import { Component, OnInit } from '@angular/core';

// utils
import constants from "../../utils/constants";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constants = constants

  constructor() { }

  ngOnInit(): void {
  }

}
