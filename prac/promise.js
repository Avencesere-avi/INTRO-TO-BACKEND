
// download code 
function download (url) {


 return new Promise (function exec (resolve , reject) {


    let data = "IPLFILE.TXT"

    setTimeout( ()=>{
  
      console.log("We are downloading the DATA : ",  data , "from " , url);
      resolve(data);
  
    },2000);


 }); 

}; 

// save code 
function save (data){



    return new Promise (function exec (resolve , reject) {
    for(let i = 0; i<100000000; i++){};
   
    setTimeout( ()=>{
   
       let filename = "IPL2023"
   
       console.log("We are now saving the DATA : " , data , " In file Name :" , filename);
          
       resolve(filename)
     })
   
   
   }) }


// upload code
   function upload(url , filename){

    return new Promise(function exec (resolve , reject){


        for(let i = 0; i<100000000; i++){};

        console.log("SUCCESFULLY SAVED THE FILE");
    
        setTimeout( ()=>{
    
            console.log("We are uploading the file :----> " , filename , "in new url : " , url );
            resolve("SUCCESS")
            
        },5000);


    } );
}; 


let result = download ("www.cricbuzz.com"); 
result.then( function resolveHandler(value){

     console.log("Downloaded the " , value , "succesfully");
     
     return save(value);

})

.then(function resolveHandler(value){

    
    return upload("www.googledrive.com" , value);

})

.then(function resolveHandler(value){

    
    return console.log("and the state is " , value);

});