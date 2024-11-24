import { Element } from "../../core/element.js";

export class InputButton extends Element {
    constructor(){
        super('input');
        this.element.type = "button";
        
    }
    
    renderView(){
        return this.element;
    }

}