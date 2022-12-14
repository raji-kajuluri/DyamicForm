import { ControlBase } from "../text-input/control-base";
export interface DropdownControl extends ControlBase{
    options?:{key:string;value:string}[];
}