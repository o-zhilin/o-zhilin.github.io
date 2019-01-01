export class AppFramework {
    run(){
        const [body] = document.getElementsByTagName('body');
        body.innerHTML = "App is working!"
    }
}

class Interface {}

class IState extends Interface {
    getparam(parametrName){
        throw("Method is not implemented!");
    }

    setParam(parametrName, parametrValue) {
        throw("Method is not implemented!");
    }
} 