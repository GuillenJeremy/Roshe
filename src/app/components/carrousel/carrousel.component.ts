import { Component, OnInit, Input } from '@angular/core';
import {CarouselConfig} from '../../interfaces/common.types'
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  @Input() images: string[]
  @Input() carouselConfig: CarouselConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
