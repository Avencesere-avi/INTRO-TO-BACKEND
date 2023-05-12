
// const y = document.querySelector("body > button")



function process(){

     let i = 0; 
     let z = 1
     let k = "hello"
     function inner(){
        i= i+1;
        return i ;
     }

     function inner2(){
      z= z+2;
      return i ;
   }

   // return [inner,inner2]
   return {inner,inner2};  // we are not calling the function we are just returnig 
}

let res = process();
// console.log(res());
let obj ={func : res}
// console.log(res());


// function dotask (task){

//    setTimeout(() => {
//       console.log(task);
//    }, 5000);
// }

// dotask("Hello")



// y.addEventListener(`click`,(e)=>{
//    console.log("hello");

   
// },{once:true});

// y.addEventListener(`click`,(e)=>{
   
//    setTimeout( ()=>{
//       window.location.href="https://www.google.com"
//    },5000);

   
// },{once:true})