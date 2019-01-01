let storage = null;
class Storage {
    constructor(){
        if(!storage){
            this.storage = [];
            storage = this;
        }
        return storage;

    }
    save (value){
        if(value.name == '') return;
        this.storage.push(value);
        localStorage.setItem("products", JSON.stringify(this.storage));
    }
    getAll (){
        const products = localStorage.getItem("products");
        if (!products) return [];
        this.storage = JSON.parse(products);
        return this.storage; 
    }
}

export default new Storage();