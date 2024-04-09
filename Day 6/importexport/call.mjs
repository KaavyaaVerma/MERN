//.mjs modular javascrpit

const sum=(num1,num2)=>{
    return (num1+num2);
}
const mul=(num1,num2)=>{
    return (num1*num2);
}
const print=(msg)=>{
    console.log(msg);
}
export{sum as Add, mul as Multiply};    // we can change name by using 'as'.
export default print;