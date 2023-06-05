 const num1 =  [1,2,3,4,5];
 const num2 =  [6,7,8,9,10];

 const joinedArray = [...num1, ...num2]

 console.log(joinedArray);

 function add(){

      let sum = 0;
      for(let i=0; i<arguments.length; i++)
      {
        sum = sum + arguments[i];
      }

      return sum;
 }

 console.log(add(...joinedArray));