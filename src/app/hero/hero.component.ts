import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// utils
import messages from '../../utils/messages'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeroComponent implements OnInit {
  messages = messages.en

  constructor() { }

  ngOnInit(): void {
  }

}
