function fetchNextElement(array){

    let idx = 0;

     function next(){

        if(idx == array.length){
            // return undefined;
            return {value:undefined , done:true}
         }

        const nextElement = array[idx];
        idx++;
        // return nextElement;                            
        return {value:nextElement , done:false}

     }

     return {next};

}

// const myElement = fetchNextElement([20,10,5])
// console.log(myElement.next());
// console.log(myElement.next());
// console.log(myElement.next());
// console.log(myElement.next());

let x = ["ravi", "golu", "dora", "krishanakant", "rishabh"]

let iterator = x[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());