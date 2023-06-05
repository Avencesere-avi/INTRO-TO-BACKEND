const myName = document.querySelector(".myName");

const myAge = document.querySelector(".myAge");

const inputField = document.querySelector(".input-name");

const inputField2 = document.querySelector(".input-age");





const myData = JSON.parse(localStorage.getItem("myData")) || {}
// const myData = JSON.parse(localStorage.getItem("myData")) || {}  

if(myData.name){myName.innerText = myData.name;}  

if(myData.age){myAge.innerText = myData.age;}  



inputField.addEventListener("input",(e)=>{


    myData.name=e.target.value;
    
    // localStorage.setItem("myData", JSON.stringify(myData));

     myName.innerText=myData.name;

     localStorage.setItem("myData", JSON.stringify(myData));
});

inputField2.addEventListener("input",(e)=>{

    // localStorage.setItem("myData", JSON.stringify(myData));

    myData.age=e.target.value;

    myAge.innerText=myData.age;

    localStorage.setItem("myData", JSON.stringify(myData));
});


// myName.innerText = localStorage.myData.name;

// localStorage.myData = JSON.stringify(myData);
  
// inputField.addEventListener("input", (e)=>{

//     myData.name = e.target.value;

//     localStorage.setItem("myData",e.target.value);

//     console.log(e.target.value);
// });   

// inputField.addEventListener("input",(e)=>{

//     // myName.innerText=e.target.value;

//      localStorage.setItem("name",e.target.value)

    

//     //  myName.innerText=localStorage.getItem("name")

   
//         myName.innerText=localStorage.getItem("name")
   
// });

// inputField2.addEventListener("input", (e)=>{

//     localStorage.setItem("age", e.target.value);
//     myAge.innerText = localStorage.getItem("age");  

// });