import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'
import * as Aos from 'aos';

// utils
import messages from '../../utils/messages'
import metadata from "../../utils/metadata";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private title: Title, private  meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle(messages.en.APP_HOME_TITLE)
    this.meta.addTags(metadata.landing, true)
  }

  ngAfterViewInit() {
    Aos.init()
  }

}
