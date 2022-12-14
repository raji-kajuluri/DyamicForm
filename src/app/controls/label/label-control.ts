import { ControlBase } from "../text-input/control-base";

export interface labelcontrol extends Omit<ControlBase, 'required' | 'key'>{
text:string;
}
