function printNumbers(arr){
    for(let i=0;i<arr.length;i++){
        const num=arr[i];
        if(num%3===0 && num%2!==0){
            console.log(num);
        }
    }
}
const numbers=[2,6,21,15,18,29,19,12];
console.log("Numbers divisible by 3 but not by 2");
printNumbers(numbers);