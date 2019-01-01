import { Element } from "../../core/element.js";

export class Li extends Element {
    constructor(id, text){
        super("li", id);
        this.element.appendChild(document.createTextNode(text));
        return this.element;
    }
    
    renderView(){
        return this.element;
    }

}