
// const colours = [ "red" , "blue" , "green" , "yellow", "pink"]

// const[ color1 , color2]= colours;

// console.log(color1);
// console.log(color2);

const users = {

    name: "ravi", 
    age:20,

    address:{
        city:"Ayanagar",
        state:"Delhi"

    }
}

const{  name, age  }= users;

// const{address}= users;

// const{city}=address

console.log(name);
// console.log(age);
// console.log(city);

// let a = 1;
// let b = 5; 

// let[a]=b;
// let[b]=a;

// console.log(x);

const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
  ];


 for (const {name , age} of people  ) {

    console.log(name,age);
    
 }

//  console.log(name);


//   const result =people.map((person)=>{

//     const ans= "Name : "+ person.name +" , " + "Father name : " + person.family.father
//     return ans;

//   });

//   console.log(result);