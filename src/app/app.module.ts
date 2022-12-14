import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsComponent } from './forms/forms.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { LabelComponent } from './controls/label/label.component';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ControlComponent } from './control/control.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormsComponent,
    CheckboxComponent,
    DropdownComponent,
    LabelComponent,
    TextInputComponent,
    DynamicFormComponent,
    ControlComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,HttpClientModule,
    CardModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
