

// upper component

function upper(n)
{
    let upper_component_rows = (n-1)/2 ;

    for(let i=1; i<=upper_component_rows; i++)
    {


        let str="";
        // stars before the spaces

        for(let j=1; j<=i; j++)
        {
            str = str+"*";
        }

        // spaces 

        let upper_component_spaces = n - 2*i;

        for(let k=1; k<=upper_component_spaces; k++)
        {
            str = str+" ";
        }

        // Stars after the spaces 

        for(let j=1; j<=i; j++)
        {
            str = str+"*";
        }

       console.log(str);
    }
}



// middle component 

function middle(n)
{
    for(let i=1; i<=n-(n-1); i++)
    {
        let str ="";
        for(let j=1; j<=n; j++)
        {
            str+="*";
        }

        console.log(str);
    }
}



// lower component 

function lower(n)
{

    let lower_component_rows = (n-1)/2 ;

    for(let i=1; i<=lower_component_rows; i++)
    {


        let str="";
        // stars before the spaces
        let stars = ((((n-1)/2) - i )+ 1)
       

        for(let j=1; j<=stars; j++) 
        {
            str = str+"*";
        }

        // spaces 

        let upper_component_spaces = 2*i-1;

        for(let k=1; k<=upper_component_spaces; k++)
        {
            str = str+" ";
        }

        // Stars after the spaces 
        
        for(let j=1; j<=stars; j++)
        {
            str = str+"*";
        }
    
        console.log(str);
    }
}


   function butterfly(n)
   {
    upper(n);
    middle(n);
    lower(n);
   }

   butterfly(17);

/*output  ->      

*               *
**             **
***           ***
****         ****
*****       *****
******     ******
*******   *******
******** ********
*****************
******** ********
*******   *******
******     ******
*****       *****
****         ****
***           ***
**             **
*               *

*/