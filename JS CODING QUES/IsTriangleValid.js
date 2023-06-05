let a = 7;
let b = 7;
let c = 7;

if( a+b > c  &&  a+c > b  &&  b+c > a)
{
    // console.log("Valid Triangle ");

    if(a==b && b==c && c == a)
    {

     console.log("Equilateral Triangle ");

    }

    else if ( a == b || c ==a  || b == c )
    {
        console.log("Iso-sceles Triangle ")
    }

    else
    {
        console.log("Scalene Triangle")
    }


}

else {
    console.log("Invalid Triangle ");
}