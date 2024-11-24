let instance = null;

class State {
    constructor(startAttributest){
        if(!instance){
            if (startAttributest instanceof Object === false) throw("State need bee Object!");
            for (let key in startAttributest) {
                this[key] = startAttributest[key];
            }
            instance = this;
          }
          return instance;  
    }
    setAttr(attrName, value){
        this.onStateChange({attrName, value});
        this[attrName] = value;
        return this;
    }

    getAttr(attrName){
        if (this.hasOwnProperty(attrName)) return this[attrName];
        throw new Error('Property with name ' + attrName + 'does not exist in state object.');
    }

    onStateChange(attr) {
        const el = document.getElementById(attr.attrName);
        el.value = attr.value;
    }

    init
}

export default new State({});