function calculate(num1,num2, operator){
    let result;
    switch(operator){
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;
        case '*':
            result=num1*num2;
            break;
        case '/':
            if(num2!==0){
                result=num1/num2;
            }
            else{
                console.log("Error:Cannot divide by zero!");
                return;
            }
            break;
            default:
                console.log("Error: Invalid operator");
                return;
    }
    console.log(`Result: ${result}`);
}
calculate(5,5,'+');
calculate(5,5,'-');
calculate(5,5,'*');
calculate(5,5,'/');
calculate(5,5,'%');