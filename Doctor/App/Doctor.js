import { stateTest } from "../../AppFramework/core/state.test.js";

export class Doctor {
    constructor(){
        console.log('Doctor constructor.');
    }

    run(){
        console.log('Testing is in process!');
        this.getTests().forEach(async (test) => test());
    }

    getTests(){
        return [
            stateTest,
        ]
    }

    getTestedAppPath(){
        return "../Config/config.json";
    }
}