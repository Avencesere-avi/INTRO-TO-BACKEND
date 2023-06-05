const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");
 
let counter = 1;

card.addEventListener(`click` , ()=> {


 const div = document.createElement("div");

 


 div.innerText=counter;
 counter++
 div.classList.add("card");
 
 container.append(div);


})


















// card.addEventListener('click' ,  ()=> {


//   const div = document.createElement("div");
//   div.classList.add("container")
  
//   const div2 = document.createElement("div");
//   div2.classList.add("card");
  

//    container.append(div);
//    container.append(div2)


// } )

