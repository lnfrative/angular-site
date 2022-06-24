import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css']
})
export class FaqItemComponent implements OnInit {
  @Input() question: string = ''
  @Input() answer: string = ''
  @Input() bg: 'secondary' | 'primary' = 'secondary'

  constructor() { }

  ngOnInit(): void {
  }

}
