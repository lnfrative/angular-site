import { Component, OnInit } from '@angular/core';

// utils
import constants from '../../utils/constants'

@Component({
  selector: 'app-section-buy-crypto',
  templateUrl: './section-buy-crypto.component.html',
  styleUrls: ['./section-buy-crypto.component.css']
})
export class SectionBuyCryptoComponent implements OnInit {
  constants = constants

  constructor() { }

  ngOnInit(): void {
  }

}
