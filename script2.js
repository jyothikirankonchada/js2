var x=15;
function sum(){
   console.log("Globally value of x is :"+ x);
   diff();
}
function diff(){
    x=5;
console.log(" locally value of x: "+x);
}
console.log(x++);
sum();