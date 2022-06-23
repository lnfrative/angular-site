import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.css']
})
export class TeamMemberCardComponent implements OnInit {
  @Input() srcImage: string = ''
  @Input() name: string = ''
  @Input() position: string = ''
  @Input() tasks: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
