import {InputButton} from "../../AppFramework/lib/elements/inputButton.js";
import State from "../../AppFramework/core/singletone.js";
import Storage from "../../AppFramework/core/storage.js";
import {MyFinanceAppScreen} from "./myfinanceApp.Screen.js";

export class SaveButton extends InputButton {
    click(event){
        Storage.save({name:State.getAttr('purchaseName'), price: 1});
        State.setAttr('purchaseName', '');
        const mfas = new MyFinanceAppScreen();
        mfas.renderView();
    }
}