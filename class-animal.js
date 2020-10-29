class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(name){
        return this.name= name;
    }
    setWeight(weight){
        return this.weight= weight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        document.getElementById('info').innerHTML= "Tên Con Vật Là: " + this.name + "<br>Cân Nặng Của Nó Là: " + this.weight;
    }
}