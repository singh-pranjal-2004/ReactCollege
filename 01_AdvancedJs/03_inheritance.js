class Car{
    constructor(brand){
        this.brand = brand;
    }

    display(){
        return 'I have a '+this.brand;
    }
}

class Model extends Car{
    constructor(brand, Model){
        super(brand);
        this.Model = Model;
    }

    show(){
        return this.display() + '. It is a ' + this.Model;
    }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());