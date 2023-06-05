function pattern5(n)
{
    for(let i=1; i<=n; i++)
    {

        let str = "";
        for(let j=n-i; j>=0; j--)
        {


          str= str+" ";


        }
        for(let z=1; z<=(2*i-1); z++)
        {
            str = str + "*";
        }

        console.log(str);
    }

}

function lower(n)
{

   for(let row =1; row<=n-1; row++)
   {

     let str="";
     let spaces = row;
     for(let a=1; a<=spaces; a++)
     {
        str+="  ";
     }

     for(let b=1; b<= 2* (n-row)-1; b++)
     {
        str+="*";
     }

    console.log(str);

   }








}


function diamond(n)
{
    pattern5(n);
    lower(n);
}




diamond(5);