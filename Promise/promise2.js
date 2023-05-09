
// function download(url, fn ){

//     console.log("Started downloading from url" , url);
//     setTimeout(()=>{

//         let x = 5;
//         for(let i = 4; i>0; i-- ){ x-- }

//         // console.log(x);
//         console.log(`Completed downloading after ${x} s `);
//         const content = "ABCDEF"
//         fn(content);

//     },2000);
    
// }

// download( "www.xyz.com", function callback(content){

//      console.log("downloaded" , content);
// });


 function newpromise(url){


    return new Promise(function executor(res, rej){

        console.log("Stared downlading from url" ,url);

        let content = "The Kerala Stories "
        res(content);
    });


 };

let ans = newpromise("www.xyz.com");
ans.then(function resolvehandler(value){
    console.log("Downloaded", value); 
})
