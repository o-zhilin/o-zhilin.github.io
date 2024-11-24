export class State {
    constructor(startAttributest){
        if (startAttributest instanceof Object === false) throw("State need bee Object!");
        for (let key in startAttributest) {
            this[key] = startAttributest[key];
        }
    }

    setAttr(attrName, value){
        this[attrName] = value;
        return this;
    }

    getAttr(attrName){
        if (this.hasOwnProperty(attrName)) return this[attrName];
        throw new Error('Property with name ' + attrName + 'does not exist in state object.');
    }

}