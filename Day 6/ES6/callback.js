// const sum=(num1,num2)=>{
//     //return "Sum = "+(num1 + num2);
//     print("Sum = "+(num1 + num2));
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// // let msg = sum(20,30);
// // print(msg);
// sum(20,40,print);


// const sum=(num1,num2,print)=>{
//     let s=num1+num2;
//     print("Sum = " + s);
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20,30,print);              // *function that call another paramter of the function is called callback function*  
                                  // ~higher order function, ~First class function=> a function that can be used as a parameter for another function, also it is higher order function and also is call backed.

const print = (msg)=>{
    console.log(msg);
}
const sum=(num1,num2,print)=>{
    let s =num1+num2;
        print(s);
    }
sum(20,30,(sum)=>{
    if (sum>20)
    {
        console.log("Greater than 20");
    }  else{
    console.log("Less than 20")
    }
    
});