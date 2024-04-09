// //rest parameters
// const sum =(num1=0,num2=0,...numbers)=>{               //... makes 'numbers' in array format and this is called rest parameter 
//     let s=0;   
//     if(numbers.length>0){
//     s =  numbers.reduce((a,b)=>a+b)                     // reduce has two parameters a and b
//     }          
//     console.log("Sum of numbers = ",(num1+num2+s));
// }
// sum(2,3,4,5,6,67);



// const mul =(num1=0,num2=0,...numbers)=>{               //... makes 'numbers' in array format and this is called rest parameter 
//     let m=0;   
//     if(numbers.length>0){
//     s =  numbers.reduce((a,b)=>a*b)                     // reduce has two parameters a and b
//     }          
                
//     console.log("Mul of numbers = ",(num1*num2*s));
// }
// mul(2,3,4);



//spread operator
const Sum = (num1,num2,num3)=>{
    console.log("Sum",(num1,num2,num3));
}
let value=[20,30,50];
Sum(...value);