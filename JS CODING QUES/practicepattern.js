

function upper(n)
{

for(let i=1; i<=n; i++)
{

    let spaces= n-i;
    let str ="";
    // For Spaces....
    for(let j=1; j<=spaces; j++)
    {
        str = str + " ";
    }

    // For Stars...
    let stars=2*i-1;
    for(let k=1; k<=stars; k++)
    {
        str= str+"*";
    }

    console.log(str);


}

}


function lower(n)
{
    
    let lrows = n-1;
    for(let i=1; i<=lrows; i++)
    {

        let spaces = i;
        let str ="";
        //spaces
        for(let j=1; j<=i; j++)
        {
            str = str + " ";
        }

        //stars
        let stars = (2*(n-i))-1
        for(let k=1; k<=stars; k++)
        {
            str = str + "*";
        }

        console.log(str);

    }

}

function diamond(n)
{
    upper(n);
    lower(n);
}
diamond(15);

