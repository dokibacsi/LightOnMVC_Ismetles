import Model from "../Model/Model.js";
import Lampak from "../View/Lampak.js";

class Controller{
    constructor(){
        this.size = 9;
        this.parentElement = $("#gameSpace");
        const Models = new Model(this.size);
        const Lamps = new Lampak(this.parentElement, this.size)
        let lampList = Models.getLampStates();
        this.setBgColor($(this.parentElement), lampList)

        $(".lamp").on("click", (event)=>{
            const detail = $(event.currentTarget).index(); //Visszaadja a lámpa indexét!
            
            if(lampList[detail] === false){
                console.log("{"+detail + ". lámpa\nÁllapota: Lekapcsolva\nÉrték: "+lampList[detail]+"\nA lista: "+lampList+"}")
                Models.lampIsOn(detail); 
                $(event.currentTarget).css("background-color", "#fece01");
            }else{
                console.log("{"+detail + ". lámpa\nÁllapota: Felkapcsolva\nÉrték: "+lampList[detail]+"\nA lista: "+lampList+"}")
                $(event.currentTarget).css("background-color", "#48ad16");
                Models.lampIsOff(detail);
            }
            

        })
    }

    setBgColor(element, list){
        for (let index = 0; index < list.length; index++) {
            if(list[index] === true){
                $(element.children(".lamp")[index]).css("background-color", "#48ad16");
            }else{
                $(element.children(".lamp")[index]).css("background-color", "#fece01");
            }
        }
        
    }
    
    myCustomEvent(myevent){
        const eventName = new CustomEvent(myevent, {detail: this})
        window.dispatchEvent(eventName);
    }
}


export default Controller;