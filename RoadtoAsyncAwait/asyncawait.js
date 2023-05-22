function download(url){
    return new Promise( function exec (resolve , reject ){
         console.log("Starting download ");
         setTimeout(()=>{
         let data = "abce"
         console.log("The url is " , url);
         resolve(data);
         }, 3000);         
    });
}

function write(data){
    return new Promise( function exec(resolve , reject ){
         console.log("Starting analyzing the data : ");
         let filename = "abcd.ppt"
         console.log("saving the data : ", data ,"And their filename is ",  filename);
         console.log("Adding extension to it : ");
         setTimeout(()=>{
            console.log("And the extension of file is :" , filename);
            resolve(filename);
        }, 3000);  
    });
}

function upload(url, filename){

    return new Promise( function exec(resolve , reject ){
        console.log(" Starting uploading now : ");
        setTimeout(()=>{
            console.log("We are uploading the data on " , url  , "and the filename is " ,filename);
            resolve("success");
        }, 3000);
    });
}



async function generator(){


           const downloaded = await download("https;//www.xyz.com"); 

           console.log("*************************************");

           console.log(downloaded);

           

           console.log("*************************************");
           console.log("*************************************");

           const filewritten = await write(downloaded);

           console.log("*************************************");
           console.log(filewritten);

           console.log("*************************************");
           console.log("*************************************");
           const uploadresponse = await upload("https://www.upload.com", filewritten);

           console.log(uploadresponse);
           return uploadresponse;

}

generator()