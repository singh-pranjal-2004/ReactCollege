var globalVar = "I am Global";
console.log(globalVar);
function localVar(){
    var locVar = "I am Local";
    console.log("locVar");
}

localVar();
// console.log(locVar);

function abe(){
    
    var x = 50;
    var x = 25;
    console.log(x);
}
abe();
// console.log(x);

function a(){
    var y = 45;
    y = 52;
    console.log(y);
}
a();

function H(){
    console.log("Before declaration", t);
    var t = 45;
    console.log("After declaration: ", t);
}
H();