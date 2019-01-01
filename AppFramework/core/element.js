export class Element {
    constructor(elementName, stateName = ''){
        this.element = document.createElement(elementName);
        this.element.id = stateName;
        this.element.addEventListener("click", this.click);
        this.element.addEventListener("input", this.input);
    }
    click(event){
        throw "click method is not implemented!";
    }

    input(event){
        throw "input method is not implemented!";
    }

    renderView(){
        throw "renderView method is not implemented!";
    }
}