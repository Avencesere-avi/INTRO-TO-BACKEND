
/*

if a funtion start with the name of function keywoed than it is said to be a functioni declaration .

other all the which are not start with the keyowrd functiono they are called to be a function expression 

function expression are of two types:

1. Named function expression 
2. anonymus

funtion fun ()
{

};

let x = function fun()
{

};

let x = function ()
{

};

(function fun()
{

});

(function ()
{

});

.....................IIFE .... IMMEDIATE INVOKED FUNCTION EXPRESSION.......

(function fun ()
{

}) ();

*/

// IIFE EXAMPLE


(function fun (X)
{

    console.log( "HI ," , X );

}) ("RAVI");


// uses of Named function 

// 1. readablity
// 2. Used in Recursive calls 
// 3. we can easy trace by conosle.trace();
function fun(fn)
{
    console.log("Welcome to JS ");
    fn();
}

function fn()
{
    console.log("HEllo");
}

// fun(function askingAboutFun()
// {

//     console.log("How Much FUN ");
//     console.trace();
// });