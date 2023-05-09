  function blocking_for_loop(){
    for(let i=0; i<100000000; i++){}
  }

  console.log("Start Of The File");

  setTimeout(function timer(){
    console.log("Timer 1 done");
  },0);

  blocking_for_loop();

  let x = Promise.resolve("Ravi's Promise");
  x.then(function processPromise(value){
    console.log("Whose Promise ?",value);
    blocking_for_loop();

  });

  let y = Promise.resolve("Ravi's 2 Promise");
  x.then(function processPromise(value){
    console.log("Whose Promise ?",value);
    setTimeout(function timer(){
      console.log("Ok Done");
    },0);
  });

  let z = Promise.resolve("Ravi's 3 Promise");
   x.then(function processPromise(value){
    console.log("Whose Promise ?",value);
    
  });

  setTimeout(function timer2(){
    console.log("Timer 2 done");
  },0)
  
  console.log("End of the File");

  











// function getRandomNum(max){

//     return Math.floor(Math.random()*max);
// }

// // getRandomNum(7);

// function createNewPromiseWithLoop() {

//      return new Promise( function executor(resolve, reject){

//                 for(let i=1; i<10000000000; i++){};

//                 const value = getRandomNum(10);

//                 if(value%2==0){

//                     resolve("Hello i am fulfilled");
//                 }

//                 else{
//                     reject("Hello i am rejected");
//                 }
//      })


// }


// function createNewPromiseWithSetTimeout() {

//     return new Promise( function executor(resolve, reject){

//                return setTimeout(function(){
//                 const value = getRandomNum(10);
                
//                 console.log("Hello ji")
                
//                 if(value%2==0){
 
//                     resolve(5);
//                 }
 
//                 else{
//                     reject("Hello my name is ravi kumar ");
//                 }
//                },1000); 
//             //    for(let i=1; i<10000000000; i++){}; 

              
// function getRandomNum(max){

//     return Math.floor(Math.random()*max);
// }

// // getRandomNum(7);

// function createNewPromiseWithLoop() {

//      return new Promise( function executor(resolve, reject){

//                 for(let i=1; i<10000000000; i++){};

//                 const value = getRandomNum(10);

//                 if(value%2==0){

//                     resolve("Hello i am fulfilled");
//                 }

//                 else{
//                     reject("Hello i am rejected");
//                 }
//      })


// }


// function createNewPromiseWithSetTimeout() {

//     return new Promise( function executor(resolve, reject){

//                return setTimeout(function(){
//                 const value = getRandomNum(10);
                
//                 console.log("Hello ji")
                
//                 if(value%2==0){
 
//                     resolve(5);
//                 }
 
//                 else{
//                     reject("Hello my name is ravi kumar ");
//                 }
//                },1000); 
//             //    for(let i=1; i<10000000000; i++){}; 

              
//     })


// }

// let y = setTimeout(()=>{console.log("hello")});
// console.log(y);

 





// // const x = function promise() {


    
// //     return new Promise(


// //         // Async behaviour 

// //         setTimeout( (resolve,reject)=>{
            
// //             console.log("Hi My name is Ravi Kumar"); 
// //             resolve();
// //         },3000)
        

// //         // synchronous behaviour //
// //         // console.log("Loop Started");

// //         // for(let i=1; i<10000000; i++){
// //         //     console.log("My name is Ravi Kumar Loop Ended")
// //         // }

// //     )               
// //     }

// // console.log(x);
// // x();
//     })


// }

// let y = setTimeout(()=>{console.log("hello")});
// console.log(y);

 





// // const x = function promise() {


    
// //     return new Promise(


// //         // Async behaviour 

// //         setTimeout( (resolve,reject)=>{
            
// //             console.log("Hi My name is Ravi Kumar"); 
// //             resolve();
// //         },3000)
        

// //         // synchronous behaviour //
// //         // console.log("Loop Started");

// //         // for(let i=1; i<10000000; i++){
// //         //     console.log("My name is Ravi Kumar Loop Ended")
// //         // }

// //     )               
// //     }

// // console.log(x);
// // x();