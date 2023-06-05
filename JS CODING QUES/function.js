function isEvenOrOdd( num )
{

    if(num%2==0){
        // console.log("Even Number");
        return "EVEN";
    }
    
    else{
        // console.log("Odd number ::) ")
        return "ODD";
    }
    
}

//CHECK WHICH NUMBERS ARE ODD AND WHICH ARE EVEN BETWEEN 1-50;


for(let i=1; i<=50; i++)
{
    const result = isEvenOrOdd(i);

    console.log(i , "--------> " + result);
    console.log();

    // console.log(result);

}

const x = console.log("ravi");

console.log(x);
console.log(typeof x);