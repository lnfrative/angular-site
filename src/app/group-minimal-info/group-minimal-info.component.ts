import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-minimal-info',
  templateUrl: './group-minimal-info.component.html',
  styleUrls: ['./group-minimal-info.component.css']
})
export class GroupMinimalInfoComponent implements OnInit {
  @Input() srcImage: string = ''
  @Input() title: string = ''
  @Input() description: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
