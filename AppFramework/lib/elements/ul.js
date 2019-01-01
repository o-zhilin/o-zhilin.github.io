import { Element } from "../../core/element.js";
import {Li} from "./li.js";

export class Ul extends Element {
    constructor(name){
        super("ul", name);
    }

    addLi(id, innerText){
        const li = new Li(id, innerText);
        this.element.appendChild(li);
        return this.element;
    }
    
    renderView(){
        return this.element;
    }

}