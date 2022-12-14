import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropdownControl } from './dropdown-control';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() meta!:DropdownControl;
  @Input() form!:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
