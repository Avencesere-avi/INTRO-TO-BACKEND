const userNameInput = document.querySelector("#username");

const paragraph = document.querySelector("p");

const form = document.querySelector("form");

let inputValue;

// userNameInput.addEventListener("change" , (e)=>{

// //  console.log(e.target.value);
//  console.log(e)
//  console.log(e.target.value)
//  inputValue = e.target.value;
//  paragraph.innerText=e.target.value;

// });


// form.addEventListener("submit",(e)=>{
    
//     e.preventDefault()
//     console.log(e)
//     console.log("submit form event clicked ");
// });

form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    const myformdata = new FormData(form);
    for(const p of myformdata.entries())
    {
        console.log(p)
    }
    console.log(e)
    console.log("submit form event clicked ");
});

form.addEventListener(`click`, (e)=>{

    console.log(e.target);
    console.log(e.currentTarget)
})