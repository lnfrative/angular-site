import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common'

// utils
import messages from '../../utils/messages'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeroComponent implements OnInit {
  scrollAnimationDelay = 4
  messages = messages.en

  @ViewChild('container') container: ElementRef | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.document.addEventListener('scroll', () => {
      const container = this.container?.nativeElement
      if (container && window) {
        const scroll = window.scrollY / this.scrollAnimationDelay
        container.style.setProperty('--scroll', `${scroll}px`)
      }
    })
  }

}
