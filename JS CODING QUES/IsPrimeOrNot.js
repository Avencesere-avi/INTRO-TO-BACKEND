
function isPrimeOrNot(num)
{


  for(let i=2; i<num-1; i++)
  {

     if(num%i==0)
     {
        return "Not-Prime";
     }


  }

  return "Prime"

}

let ans = isPrimeOrNot(1000000000001);
console.log(ans);

// Find which are prime are not in between 1 to 50 //

// for(let i =1;  i<=50; i++)
// {

//    let result = isPrimeOrNot(i);
//    console.log(i , result);

// }