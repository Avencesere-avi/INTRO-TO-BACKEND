
const num1 =  [1,2,3,4,5];
const num2 =  [6,7,8,9,10];

const joinedArray = [...num1, ...num2]
function add (...nums){

    const ans = nums.reduce((total, num)=>{
       
    return total + num;

    },0);

    return ans;

}

console.log(add(...joinedArray));