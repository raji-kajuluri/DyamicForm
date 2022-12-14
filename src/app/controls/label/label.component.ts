import { Component, Input, OnInit } from '@angular/core';
import { labelcontrol } from './label-control';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() meta!:labelcontrol;

  constructor() { }

  ngOnInit(): void {
  }

}
