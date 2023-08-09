const num1 = 8;
const num2 = 9;
const num3 =10;
let add1 = num1 + num2;
let add2 = num2 + num3;
let add3 = num3 + num1;
if (add1 > num3){
    console.log(" It is a triangle.");
}
else if (add2 > num1){
    console.log(" It is a triangle.");
}
else if (add3 > num2){
    console.log(" It is a triangle.");
}
else{
    console.log(" It is not a triangle.");
}