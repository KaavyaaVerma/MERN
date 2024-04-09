const data =[10,20,30,40];
let [x,y,z,w] = data;
// let x = data[0];
// let y = data[1];
// let z = data[2];
// let w = data[3];
console.log(x,y,z,w);
const studentInfo={
    name:"Ravi",
    course:"MCA",
    rollno:1
}

let {
    name:sname,course:mycourse,rollno:rno                   //we can change the name or default parameters like this also by using colon(:) sign.
}=studentInfo;                                              // This is called destructuring in JavaScript.
console.log(sname,mycourse,rno)