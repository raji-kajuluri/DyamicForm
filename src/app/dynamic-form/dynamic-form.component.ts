import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup ,Validators } from '@angular/forms';
import { ControlBase } from '../controls/text-input/control-base';
import { MetaService } from '../meta.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnChanges {
  @Input() meta:ControlBase[] = [];
  @Input() data:any={};
  form: FormGroup;
  payLoad = '';

  constructor(private metaservice:MetaService) { }
  ngOnChanges() {
  this.form = this.metaservice.toFormGroup(this.meta,this.data)
    
  }
  

 onSubmit(){
  this.payLoad  = JSON.stringify(this.form.getRawValue());
  console.log(this.form.valid)
  console.log(this.payLoad)
 }
}
