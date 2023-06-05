


function pattern3(n)
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

pattern3(4);