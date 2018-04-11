import { Component, OnInit, Input } from '@angular/core';
import { SubboardState } from '../subboardstate';

@Component({
  selector: 'app-subboard',
  templateUrl: './subboard.component.html',
  styleUrls: ['./subboard.component.css']
})
export class SubboardComponent implements OnInit {

 @Input() state: SubboardState = new SubboardState();

  constructor() { }

  ngOnInit() {
  }

}
