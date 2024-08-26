// arrow function with single expression
const square = x => x*x;
console.log(square(4));

// arrow function with two parameters
const add = (a, b) => a + b;
console.log(add(3, 5));

// arrow function with objects
const obj = (x, y) =>({
    x,
    y
});
console.log(obj(4,6));

// arrow function with obj literal
const person = (name, age) => ({
    name: name,
    age: age,
})
const personX = person('Pranjal', 32);
console.log(personX.name);

const createPerson = (firstName, birthYear) => {
    return {
        firstName: firstName,
        birthYear: birthYear,
    };
};
const person1 = createPerson('Pranjal', 2004);
console.log(person1);

// this keyword
// global space
console.log(this);
// window obj
function d(){
    console.log(this);
}
// d();

// use strict mode
"use strict";
console.log(this); // window obj
function d(){
    console.log(this);
}
// d();

// call bind and apply
const student = {
    name: 'pranjal',
    printName:function(){
        console.log(this);
    },
};
student.printName();

const student2 = {
    name: 'harsh',
};

student.printName.call(student2);

// this key on arrow functions
obj3 = {
    a:45,
    b:()=>{
        console.log(this);
    },
};
obj3.b();

// enclosing lexical context -> how this wriiten in code
const obj4 = {
    j: 78,
    h: function(){
        const i = () => {
            console.log(this);
        };
        i();
    },
};
obj4.h();

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printStudent(){
        console.log("The name of the student is ", this.name);
        console.log("The age of the student is ", this.age);
    }
}

const student3 = new Student('rahul', 34);
student.printName();
