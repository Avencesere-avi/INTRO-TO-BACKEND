

// return keword : when we write function it is supposed to give the return something otherwise it gave undefined.
  //   console.log(x);
  //      add();
   
// js execution takes in two phase 

//1. memory creation phase : (where the variable and function declration are assinged , all the fucntiond declearation are asasigned to a function , and var , let , const are assigned with the undefiend) 

// 2. code execution phase : where the varaible are actually assigned to its given value in code , and for fucntions there are seperation local code execution in code execution phase . 

// global scope vs local scope 

// global scope means the variables are accisble through whole the code global code are of two categories 1. window object (jiske andar sb kxh hota hai , functions , var and all the other things ) , 

//2. script scope where let and cosnt variable are there 



// local scope means the the scope is upto only to its local , for eg in functional scope what ever in defiend it accessible upto to inside only if we try to acces any variable which is in functional scope then we cant access to them 
  //  var add = function(x,y){
    
  //    return x+y;

    
  //  }

    /* memory creation phase :              code execution phase 

      x = undefined                           
     add: undefined */

    //  hoisting means if we try to access a variable before its declaration 
    //  and it does not give error that means it is hoisted (it means usko ham access kr skte)

    // console.log(x);
    //  let x=5

  // in the the case of let and cosnt there in TDZ temporal dead zone which were made for these two only that we cant access a let and const type variable before initialzation. // 


  // in js and other programming languages mai kya hota hai ki naa jo hamare primitives hote unke pass koi properties nhi hota 

  // boxing : boxing means wraapping a primitive into an object 


  // compiled languages: the source code conveted directly into machine code , as a result they tend to be faster , and more efficiennt than interpreted langauges 

  // interpreted languages: interpreted runs through a program line by line and execute it , but slower than compiled languages 

  // let name = "RAVI";
  // console.log( name.toLowercase());
  // console.log(name);

  // let x = 1 

  // {
  //   // console.log(x)
  //    let x = 11;
  // }

  // console.log(x);

  // let  x = "ravi"
  // function say()
  // {
  //   // "use strict"
  //   let b ;
  //   console.log(b);
  // }

  // // console.log(aa);
  // say()
  // console.log(b)

  // console.log(aa);

  // console.log("hello");
  // console.lo("hello2")

  // var teacher = "sanket"
 
  // function sayHi()
  // { 
  //   console.log("chal gye tera say hi bc");
  // }

  

  // function fun(){
  //   var teacher = "pulkit";

  //   hi();
    
  //   function hi(question) 
  //   {
       
  //      console.log(teacher,question);

  //      sayHi2()

  //      function sayHi2(){

  //       sayHi3();

  //          console.log("sayhi2");

  //          function sayHi3(){

  //           sayHi4()

  //              function sayHi4(){
                 
  //               sayHi() 

  //              } 
          
  //         }
  //      }
  //   }
    
  // }
  // fun();
  

  // console.log("higer order function ");

  // function sayHi(fun){

  //   console.log("i am higher order function ");
  //   fun();
  // }

  // sayHi( function callback(){

  //   console.log("I am call back function ");
  // });
  

   


  // function parent(){

  //   const a = 4; 
  //   const b = 6;
    
  //    return function(){
      
  //     console.log(a+b);
  //    }

  // }

  // const x = parent();
  // console.dir(x);
  // console.log(x);


  const math={

    add: function(x,y){return x+y},

    sub: function(x,y){return x-y},

    cube: function(x){ return x*x*x}

  }

 const add=  math.add(9,9);

 const sub = math.sub(9,9);

 const cube = math.cube(2)

 console.log(add);
 console.log(sub);
 console.log(cube);