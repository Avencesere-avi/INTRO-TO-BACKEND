function gcd (m,n )
{

    let ans = 1;// for Prime numbers there only highest factor will be for the both number are 1//

    for(let i=2; i<Math.min(m,n); i++ ) // loopinng all the value till min number of both the input given , cheking if they both divisible by any i then we will upadte ans otherwise we will return 1 //
    {
        if(m%i==0 && n%i==0)
        {
            ans = i;
        }

        
    }

    return ans;
    


}

const result = gcd(105,36);
console.log(result);