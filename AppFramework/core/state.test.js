import { State } from "./state.js";
import {Eq} from "../../Doctor/Lib/eq.js";
export function stateTest(){
    createObjectOk();
    createJbjectCorrect();
    setAttr();
    getAttr();
}

function createObjectOk(){
    console.log("Try create empty Object:");
    new State({});
    console.log('Ok!');
}

function createJbjectCorrect(){
    console.log("Try create correct Object:");
    const state = new State({count: 1});
    Eq(state.count, 1);
    console.log("Ok!");
}

function setAttr(){
    console.log("Try create empty Object:");
    const state = new State({});
    console.log("Try set 'count' attribute to state:");
    const newState = state.setAttr('count', 5);
    console.log("Checking corect setting attribute count eq 5:");
    Eq(newState.count, 5);
    console.log('Ok!');
}

function getAttr(){
    console.log("Try create empty Object:");
    const state = new State({});
    console.log("Try set 'count' attribute to state:");
    const newState = state.setAttr('count', 5);
    console.log("Checking corect setting attribute count eq 5:");
    Eq(newState.count, 5);
    console.log("Checking corect get attribute value from state.");
    const count = newState.getAttr('count');
    Eq(count, 5);
    console.log('Ok!');
}