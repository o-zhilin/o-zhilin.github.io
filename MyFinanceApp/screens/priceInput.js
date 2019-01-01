import{InputText} from "../../AppFramework/lib/elements/inputText.js";
import State from "../../AppFramework/core/singletone.js";

export class PriceInput extends InputText {
    input(event){
        State.setAttr(event.srcElement.id, event.srcElement.value);
    }
}