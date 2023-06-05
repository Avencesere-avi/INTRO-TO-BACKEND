

function sumOfDigits(n)
{

    let sum = 0;

  while(n>0)
  {
    
     let lastdigit = n%10; // you get the last digit here 
     sum = sum + lastdigit;

      n = Math.floor(n/10); // eliminating the last digit , 4136 / 10 ----> 413.6 ---> Math.floor(413.6)-----> 413 ; 
  }

  return sum;

}

const x = sumOfDigits(12);
console.log(x);