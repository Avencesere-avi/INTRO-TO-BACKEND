const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

green.addEventListener("dblclick", (e)=> {

    
    console.log("green event clicked ");
})

pink.addEventListener("dblclick", (e)=> {

    
    console.log("pink event clicked ");
})

blue.addEventListener("click", (e)=> {


    // e.stopPropagation();
    console.log("blue event clicked ");
    
})

document.body.addEventListener("click", (e)=> {
    // const input = document.createElement("input");
    // document.body.appendChild(input);

    // e.stopPropagation();
    console.log("document body event clicked ");
    
})

window.addEventListener("click", (e)=> {

   
    // e.stopPropagation();
    console.log("window event clicked ");
    
})
