// Tasks: (Don't use promises only use promises)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl



 function download(url){

    return new Promise(function exec(resolve , reject){

          console.log("Starting the download data form the " , url);

          setTimeout(()=>{

            let content= "ABCDEF"
            console.log("downlading ur data" , content);

            resolve(content);
          },2000);

         

    });
 }

 function writefile(content){

    return new Promise(function exec(resolve , reject){

        console.log("Started writing a file with", content);
        setTimeout(function wrtie() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);      
    });
 }

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log("upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    })
}

download("www.xyz.com").then( function resolvehandler(value){

    console.log("Downloaded");
    return writefile(value);
})


.then(function exec(value){

    console.log("now we will upload");
    return uploadData("upload.com", value);
})

.then(function exec(value){
    console.log("ok done ho gya bhai " ,value);
})





  


















// function download(url) {
//     return new Promise(function exec(resolve, reject) {
//         console.log("Starting to download data from", url);
//         setTimeout(function down() {
//             console.log("Downloading completed");
//             const content = "ABCDEF"; // assume dummy download content
//             resolve(content);
//         }, 6000);
//     });
// }
 
// function writeFile(data) {
//     return new Promise(function exec(resolve, reject) {
//         console.log("Started writing a file with", data);
//         setTimeout(function wrtie() {
//             console.log("Completed writing the data in a file");
//             const filename = "file.txt";
//             resolve(filename);
//         }, 5000);
//     })
// }

// function uploadData(file, url) {
//     return new Promise(function exec(resolve, reject) {
//         console.log("Started uploading", file, "on", url);
//         setTimeout(function up() {
//             console.log("upload completed");
//             const response = "SUCCESS";
//             resolve(response);
//         }, 2000);
//     })
// }

// download("www.xyz.com")
// .then(function processDownload(value) {
//     console.log("downloading done with following value", value);
//     return writeFile(value);
// })
// .then(function processWrite(value) {
//     console.log("data written in the file with name", value);
//     return uploadData(value, "www.upload.com");
// })
// .then(function processUpload(value) {
//     console.log("we have uploaded with", value);
// });


