function colormixer(color1,color2){
    let result;
    switch(true){
        case(color1==="red" && color2==="blue")||(color1==="blue" && color2==="red"):
        result="purple";
        break;
        case(color1==="red" && color2==="yellow")||(color1==="yellow" && color2==="red"):
        result="orange";
        break;
        case(color1==="blue" && color2==="yellow")||(color1==="yellow"&& color2==="blue"):
        result="green";
        break;
        default:
            result="invalid color combination";
    }
    console.log(`result: ${result}`);
}
colormixer("red","blue");
colormixer("red","yellow");
colormixer("blue","yellow");
colormixer("greeen" , "purple")

