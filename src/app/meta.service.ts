import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from './controls/text-input/control-base';
import { lastValueFrom, map, Observable, tap } from 'rxjs';
import { Meta } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private http: HttpClient) { }
  async getMeta(): Promise<ControlBase[]> {
    return lastValueFrom(this.http.get('assets/json/meta.json')
      .pipe(map((meta: any) => meta.sort((a: any, b: any) => a.order - b.order)
      )
      )
    );
  }
  toFormGroup(controls:ControlBase[],data:any){
    const group:any={};
    controls.forEach((control) =>{
      if(control.controlType!=='label'){
        group[control.key]=control.required? new FormControl(data[control.key] || '',Validators.required):new FormControl(data[control.key] ||'');      }
    });
    return new FormGroup(group);
  }
}
