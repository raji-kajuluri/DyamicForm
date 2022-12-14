import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { checkboxcontrol } from './checkbox-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() meta!:checkboxcontrol;
  @Input() form!:FormGroup;
  metalabel:string;
 

  constructor() { }

  ngOnInit(): void {
  }

}
