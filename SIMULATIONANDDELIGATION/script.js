

const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const addcard = document.querySelector(".card");
 
let counter = 1;

addcard.addEventListener(`click` , ()=> {

 
 const newcard = document.createElement("div");
 newcard.innerText=counter;
 counter++
 newcard.classList.add("card");
 
 container.append(newcard);

//  newcard.addEventListener( "click", ()=>{
//     newcard.remove();
//  })


})

container.addEventListener(`click`, (e)=>{

  if(e.target!=container)
  {

    e.target.remove();
    
  } 
})




















// card.addEventListener('click' ,  ()=> {


//   const div = document.createElement("div");
//   div.classList.add("container")
  
//   const div2 = document.createElement("div");
//   div2.classList.add("card");
  

//    container.append(div);
//    container.append(div2)


// } )

