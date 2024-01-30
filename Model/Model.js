class Model{
    #list = []
    #size
    constructor(size){
        this.#size = size
        this.#list = this.#listUpload();
    }

    #listUpload(){
        /*Random állítja be a lámpákat, hogy világítanak-e vagy sme!*/
        for (let index = 0; index < this.#size; index++) {
            let numberRandom = Math.random();
            if(numberRandom > 0.5){
                this.#list.push(true);
            }else{
                this.#list.push(false);
            }
        }
        console.log(this.#list)
        return this.#list
        
    }

    getLampStates(){
        console.log(this.#list)
        return this.#list
    }

    lampIsOn(id){
        this.#list[id] = true;
    }

    lampIsOff(id){
        this.#list[id] = false;
    }
}

export default Model