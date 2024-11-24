import {ScreenAbstract} from "../../AppFramework/core/screen.js";
import {PriceInput} from "./priceInput.js";
import {SaveButton} from "./saveButton.js";
import {ProductList} from "./productsList.js";

let screenApp = null;

export class MyFinanceAppScreen extends ScreenAbstract{
    constructor(){
        if(!screenApp){
            super();
            screenApp = this;
        }
        return screenApp;
    }

    renderView(){
        const body = super.renderView();
        body.id = 'myFinanceApp';
        const currentNode = document.querySelector('#myFinanceApp');
        const input = new PriceInput('purchaseName').renderView();
        body.appendChild(input);

        const button = new SaveButton().renderView();
        button.value = "Save";
        body.appendChild(button);

        const productList = new ProductList('productsList');
        body.appendChild(productList.renderView());
        
        currentNode.parentNode.replaceChild(body, currentNode);
    }
}