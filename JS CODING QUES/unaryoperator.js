// Unary Opeartor 

// ta type of operator which require only one operond for eg . a++ , a-- , ++a , --a , typeof , !   ....


// for eg. a++ (post increment unary additon )
/* 

    in post increment unary adddition we firs assign value to other varaible if its there then incremnet the value of variable  by 1
     same opposite to prifix unary additon in this we first incremnet the value then assign the value if the other no. is there .

*/


// postfix increment  unary additon 

let a = 10; 
let b = a++;
 console.log(a,b);  // 11, 10 // 

// prefix increment unary additon 

let x = 10; 
let y = ++x;   // 11 , 11 

console.log(x,y)

// unary + (plus ) operator 

let p = "22";
let q = +p // convert the typeof p in number //

console.log(typeof q);

// unary -(minus) operator 

let m = "10"
let n = -m;

console.log(m,n); // it change the type in a number also as well as negate the value of m also //