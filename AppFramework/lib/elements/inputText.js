import { Element } from "../../core/element.js";

export class InputText extends Element {
    constructor(name){
        super("input", name);
    }
    
    renderView(){
        this.element.type = "text";
        return this.element;
    }

}