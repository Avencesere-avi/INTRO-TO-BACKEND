
function pattern1(n){
for(let i=1; i<=n; i++)
{
   let star = "";
   for(let j=1; j<=n; j++)
   {
    star=star + "*";
   }
   console.log(star);
}
}



pattern1(8);
console.log();
console.log( "Pattern 2 ");
console.log();
function pattern2(n)
{


  for(let i=1; i<=n; i++)
  {

    let star="";
    
    for(let j=1; j<=i; j++)
    {
        

        star = star +"*";
    }

    console.log(star);

  }


}

pattern2(3);