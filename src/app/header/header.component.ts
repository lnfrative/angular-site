import { Component, OnInit } from '@angular/core';

const someClass = `
  color: red;
`

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  someClass = someClass

  constructor() { }

  ngOnInit(): void {
  }

}
