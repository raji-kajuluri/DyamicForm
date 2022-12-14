export interface ControlBase{
    key:string;
    required:boolean;
    order:number;
    controlType:string;
    text:string;
}
 export interface JsonFormValidators {
    min?: number;
    max?: number;
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minLength?: boolean;
    maxLength?: boolean;
    pattern?: string;
    nullValidator?: boolean;
    validators: JsonFormValidators;
  }