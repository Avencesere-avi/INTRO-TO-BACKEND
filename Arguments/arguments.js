

 const add1 =  function(x,y){
    
        let sum =0;
         for(let i=0; i<arguments.length; i++){

            sum += arguments[i];
         };

         console.log(typeof arguments);

         return sum

         

  }

//   console.log (add1(2+2));

const add2 =  function(x,y){
    
  
     const convert =  Array.from(arguments);
     console.log(convert);

     const ans = convert.reduce((total,argu)=>{

        return total + argu;

     });


     return ans;

}

console.log(add2(2,4,6));


const add3 =  function(x,y){
    
  
    const convert =  [... arguments]
    console.log(convert);

    const ans = convert.reduce((total,argu)=>{

       return total + argu;

    });


    return ans;

}

console.log(add3(2,4,6));