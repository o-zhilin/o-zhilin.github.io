import {Ul} from "../../AppFramework/lib/elements/ul.js";
import Storage from "../../AppFramework/core/storage.js";
import {Li} from "../../AppFramework/lib/elements/li.js";

let productList = null;

export class ProductList extends Ul {
    constructor(name){
        
        if(!productList){
            super(name);
            productList = this;
        }
        return productList;
    }
    renderView(){
        this.element.innerHTML = '';
        const products = Storage.getAll();
        let i = 0;
        products.forEach((product)=>{
            let liId = 'productListLi' + i;
            let li = new Li(liId, product.name + ' ' + product.price);
            this.element.appendChild(li);
            i++;
        });
        return this.element;
    }
}