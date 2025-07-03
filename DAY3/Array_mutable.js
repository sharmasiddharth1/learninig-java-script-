let Fruits = ["apple", "mango" , "banana" , "litichi"];

console.log(Fruits);

// mutable example 
Fruits[0] = "pineapple";
Fruits[2] = "avacado";

console.log(Fruits);


// this is length of current arrays of fruits ;
let lengthOfFruits = Fruits.length;
console.log("this is length of array before update :" + lengthOfFruits);

Fruits[10] = "grappes";
console.log("length of arrays after update : " , Fruits.length);

