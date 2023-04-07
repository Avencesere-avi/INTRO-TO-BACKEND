
// HOF (HIGHER ORDER FUNCTIOON ) ; THOSE FUNCTION WHICH TAKES ANTOTHER FUNCITON IN AN ARGUMENT IS KNOWN AS HIGHER ORDER FUNCTION .

// SAME SORT IS ALOS A HIGHER ORDER FUNCTION , WHICH TAKES COMPARATOR FUNCTION IN AN ARGUMENT .

// COMPARTOR FUNCTION MEANS WE GIVE THE LOGICS WHEN WE PERFORM NUMBERICAL SORTING 

// IN JAVASCRIPT DEFAULT SORTING IS WITH THE RESPPECT DICTIONARY ORDER BUT IF WE WANT TO DO SORTING IN NUMERICAL ORDER WE HAVE TO USE SORT METHOD WITH THE COMARATOR FUNCTION .

// SORTING MEANS ARRANGING ELEMETNS IN SOME ORDER , OR WE CAN CALCULATING PERMUTAION 


let arr = [ 10, 11, 12, 8 ,7 ,6, 13  , 1 , 2 , 3];
// arr.sort();
console.log(arr.sort(function (a,b) {

     return a-b;               // increasing order .

}));

console.log(arr.sort(function (a,b) {

     return b-a;               // increasing order .

}));


let arr2 = [ "arsh", "ravi" , "rishabh" , "saurav" , "shivraj" , "dipender" , "atul"];  // it will sort easily becuase defalut sorting methood in valid for dictionary order.

console.log(arr2.sort());


