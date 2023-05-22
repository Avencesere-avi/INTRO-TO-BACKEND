// a different funtion* 

// we have the control when we have to stop the execttion and then after start //

// when we call the generator it actually to execute immeditely

function* generator(array){


    for(let i = 0; i<3; i++){

        console.log("inside for loop");
        console.log("i is " , [i] , "and the element is : ",array[i]);
        // yield 1;

        console.log("after the yield 1");
        // yield "last yield";
        // console.log("writing yeild 2 after this");
        // yield 2;
    }
//    console.log("i am inside the generator function  ");
//    yield 1;

//    yield 2; 

//    console.log("i am after the yield 2");

//    yield 3; 

//    yield 4; 

//    console.log("Ending the generator function");


}

const ans = generator([2,3,4]);
// console.log(ans);
// ans.next();
console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// r
