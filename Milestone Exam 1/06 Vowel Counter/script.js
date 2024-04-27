function countvowels(str){
    str=str.toLowerCase();
    const vowels=['a','e','i','o','u'];
    let count=0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i]))
        {
            count++;
        }  
    }
    return count;
}
const inputstring="Minimize";
const vowelcount=countvowels(inputstring);
console.log(`The number of vowels in "${inputstring}" is:${vowelcount}`);