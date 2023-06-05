


function pattern3(n)
{

   for(let i=1; i<=6; i++)
   {

      str = "";
      str2= "";

      // spaces 

      for(let j=n-i; j>=0; j--)
      {
        str = str + " ";
      }

      for(let z=1; z<=i; z++)
      {
        str2 = str2 + "*";
      }
  
       console.log(str + str2 );

   }


}


pattern3(6);