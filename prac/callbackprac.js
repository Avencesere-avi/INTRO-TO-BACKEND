
// we will use callback : 
// fucntion to download data from the url ;


function download(url , fn ){

  let data = "IPLFILE.TXT"

  setTimeout( ()=>{

    console.log("We are downloading the DATA : ",  data , "from " , url);
    fn(data);

  },2000);
 
};


function save (data){


 for(let i = 0; i<100000000; i++){};

 setTimeout( ()=>{

    let filename = "IPL2023"

    console.log("We are now saving the DATA : " , data , " In file Name :" , filename);

    upload("WWW.GOOGLEDRIVE.COM", filename);
    

 });


};

function upload(url , filename){

    for(let i = 0; i<100000000; i++){};

    console.log("SUCCESFULLY SAVED THE FILE");

    setTimeout( ()=>{

        console.log("We are uploading the file :----> " , filename , "in new : " , url );

        done("SUCCESS :) ");
    },5000);

    
   
}


function done(state){

    setTimeout( ()=>{

        console.log("The STATE IS " , state);
    }, 5000);
}



download("www.cricbuzz.com" , function (data){

    setTimeout(()=>{

        console.log("FILE DOWNLOADED SUCCESFULLY");
        save(data);

    },5000);
    
});
// save("IPLFILE.TXT");
// upload("www.googledrive.com", "IPL2023");


























// // generators 


// // yield function basically yeild keyword jasie hi dekhta hai waise hi wo usko bhara fenk deta hai then jab agle baar ham jab yield krte hai to to phir se jaha se pause hua tha wha se resume hota hai ///

// // its a special function , is ham fucntion pe star lgate hai , to pta chal jata hai ki ye generator function hai , 

// // special function hai jisme hamara execution jo hai wo continious nhi hota hai , when we call generator funciton it immediately do not start instead they return special type of itereator , and when we call next () , then the generator function starts to execute untill it ecounters with yeild keyoword

// // function* generator(){

// //     console.log("Inside generator function :  ");
// //     let x = yield; 

// //     console.log( "After 1st yield " , x);
// // }

// // const itereator = generator();
// // itereator.next();
// // itereator.next("Ravi");
// // itereator.next();


// // async function generator(){

// //     console.log("Inside generator function :  ");
// //     await

// //     console.log( "After 1st yield " , x);
// // }



// function hof(name, fn){

//     console.log("we are in HOF and the name is " , name);
//     fn();

// }

// hof("ravi", function callback(){
//     console.log("Callback function activated");
// });











// function promise(){


//      return new Promise(function exec(resolve, reject){


//         for(let i = 0; i<100000; i++){}

//         console.log("We are in promise and the name is : " );

//         setTimeout(()=>{
//             console.log("EXECUTING THIS SET TIMEOUT ");
//         },2013);
//         resolve("ravi");

//      });
// }





// console.log("1");
// const x = promise();
// console.log("2");

// console.log(x);

// x.then(
    
//     function resolveHandler(value){

//     console.log(value);
//     console.log("Promise function activated ");

//      return new Promise(function exec (resolve , reject ){

//          console.log("Inside first then functon : ");
//          resolve ("Giving the value from first then function ")


//      });

// })



// .then(
    
//     function resolveHandler(value){


//     console.log("value niche hai ");
//     console.log("Hi i am value " , value);
//     console.log("Promise function activated 2");

//     setTimeout(()=>{
//         console.log("EXECUTING THIS SET TIMEOUT in then function 2 ");
//     },1000);

// });



// // iterators 



// // function fetchNextElement(arr){


// //    let ind=0;


// //                     function next(){

// //                         if(ind !==arr.length){

// //                             const myElement = arr[ind];

// //                             ind = ind + 1 ;
// //                             return { value : myElement , done : false};

// //                         }
                    
// //                         else{

// //                             return {value:undefined , done : true };
// //                         }

// //                     }

// //    return next ;
     

// // }

// // let a = fetchNextElement([2,4,3]);
// // console.log(a());
// // console.log(a());
// // console.log(a());
// // console.log(a());
// // console.log(a());
// // console.log(a());
 
