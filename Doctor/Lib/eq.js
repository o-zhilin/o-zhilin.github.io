export function Eq(a,b){
    if (a === b) {
        console.log("Ok!");
        return;
    }
    throw new Error('A is not Eq B!');
}