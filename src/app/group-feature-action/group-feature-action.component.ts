import { Component, OnInit, Input } from '@angular/core';

// utils
import messages from "../../utils/messages";
import constants from '../../utils/constants'

@Component({
  selector: 'app-group-feature-action',
  templateUrl: './group-feature-action.component.html',
  styleUrls: ['./group-feature-action.component.css']
})
export class GroupFeatureActionComponent implements OnInit {
  messages = messages.en
  constants = constants

  @Input() title: string = ''
  @Input() description: string = ''
  @Input() srcImage: string = ''
  @Input() bg: 'transparent' | 'contrast' = 'transparent'
  @Input() position: 'normal' | 'invert' = 'normal'

  constructor() { }

  ngOnInit(): void {
  }

}
