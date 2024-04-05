let data = [10,40,50,60.4,"KIET"];
console.log(data);

const msg=()=>console.log("Array Function");
let Data =[10,40,50,60.4,"KIET",msg];
console.log(Data);
Data[5]();

// for(let i=0;i<Data.length;i++){
//     console.log(`Value of ${i} is ${Data[i]}`);
// }

// for(let index in Data){
//     console.log(`Value of ${index} is ${Data[index]}`);
// }

// for(let value of Data){
//     console.log(`Value of array = ${value}`);
// }

Data.forEach(value=>console.log(`Value of Array = ${value}`));