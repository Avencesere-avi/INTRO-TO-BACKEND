

function fibonacchie(n)
{

  if(n==0)
  {
     console.log(0);
    return;
  }

  else if (n>=1)
  {
    console.log(0);
    console.log(1);
  }


  let secondlast = 0;
  let last = 1;
  for(let i =2; i<=n; i++)
  {
      let ans = secondlast + last;
      console.log(ans);
      secondlast = last;
      last = ans;

  }


}
fibonacchie(13);
