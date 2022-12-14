import { Component ,OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValueFromArray } from 'rxjs';
import { ControlBase } from './controls/text-input/control-base';
import { DataService } from './data.service';
import { MetaService } from './meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'DynamicForm';
  meta!:ControlBase[];
  data!:any;
  Refresh:any;
  displayBasic: boolean;
  payLoad: any;
  constructor(
    private metaService:MetaService,
    private dataService:DataService
  ){}

  async ngOnInit(){
    this.refresh();
  }
  async refresh(){
    this.data = await this.dataService.getData();
    this.meta = (await this.metaService.getMeta()) as ControlBase[];
   

  }
 
  showBasicDialog(){
    this.displayBasic=true;
  }

 
 
}
