console.log("this is my first js");
var a="hello one";
// let a="hello";
const a1="hello";

 function  nameTwo(...value){
    return value;
}
let o;
let s=Symbol("symbol");
let s1=Symbol("symbol");
const array=nameTwo(1,"hii",null,123n,true,o);
array.forEach((e)=> {
console.log(typeof(e)+'('+e+')');    
});

console.log(typeof(s));

const bool=(Symbol.keyFor(Symbol.for("symbol"))==Object("symbol"))?true:false;

console.log(bool);

