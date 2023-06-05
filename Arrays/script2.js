// const nums =[5,1,2,3,6];

// // const ans = nums.map((num)=>{
// //     return num*2
// // });

// // console.log(ans);

// // const ans = nums.filter((num)=>{
// //     return num%2==1
// // });

// // console.log(ans);

// const ans = nums.reduce((max,num)=>{
    
//     if(num>max){
//         max = num
//     }

//     return max;
// },0);

// console.log(ans);


// const users = [

//     {
//         firstname: "Ravi",
//         lastname: "Kumar",
//         age:20
//     },

//     {
//         firstname: "Dora", 
//         lastname : "jha",
//         age:21
//     }, 

//     {
//         firstname: "rishabh", 
//         lastname : "rawat",
//         age:21
//     },


//     {
//         firstname: "dipender", 
//         lastname : "rana",
//         age:20
//     },

//     {
//         firstname: "xyx", 
//         lastname : "peter",
//         age:54
//     },

// ];



// // const result = users.filter((user)=>{
// //     return user.age<21;
// // }).map((user)=>{
// //     return user.firstname;
// // });

// // console.log(result);

// const result = users.map((user)=>{

//     return user.firstname;
// });

// console.log(result);


// //    function min(nums){

// //     let min = 6; 

// //     for(let i= 0; i<nums.length; i++)
// //     {
// //         if(nums[i]<min)
// //         {
// //             min = nums[i]
// //         }
        
// //     }

// //     return min;
// //   }

// //   console.log(min(nums));

// //   c

// // const x = nums.reduce((value,number)=>{

// //     console.log(value, number);
// //      return  value + number
// // });

// // console.log(x);


// //  const persons = [

// //     {
// //         name:"ravi",
// //         age:20
// //     },
// //     {
// //         name:"dora",
// //         age:21
// //     },
// //     {
// //         name:"rishabh",
// //         age:21
// //     },
// //     {
// //         name:"rana",
// //         age:20
// //     }
// //  ]

// // //  console.log(persons);
// //  persons.forEach((person)=>{
   
    
// //     for(let i=0; i<4; i++)
// //     {
// //         console.log(person.age);
// //     }
// //     // console.log(person.age);
    
    
// //  });


// //  const ans = nums.some((num , index)=>{

// //     console.log(index);
// //     return num%2==1
// // });

// // console.log(ans);


// // function add(){

    
// //          let sum = 0;
// //          for(let i=0; i<arguments.length; i++)
// //          {

// //             sum= sum + arguments[i]

// //          }

// //          console.log(sum);
           
// //     }

// // add(1,6,6,6,6,6);