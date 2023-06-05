const button = document.querySelector("#btn")

let count = 1; 
button.addEventListener("click", ()=>{
    setTimeout(()=>{
        console.log(count);
    },0);

    // let count = 5; 
});


