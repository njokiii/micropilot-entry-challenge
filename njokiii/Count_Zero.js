function countZeros(A) {
    //initialize a counter variable to 0
    let count = 0;

    //loop through each element in the array
    for ( let i=0; i < A.length; i++){
        //check if the current element is 0
        if(A[i] === 0){
            //if it is, increment the counter
            count++;
        }
    }
    //return the total count of zeros
    return count;
}

//Example usage:
let arr = [0, 1, 0, 5, 6, 0, 2];
console.log(countZeros(arr)); //Output: 3