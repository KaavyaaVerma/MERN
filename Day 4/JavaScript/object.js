let studentInfo={
    rollno:1,
    name:"Ravi Kumar",
    course:"MCA",
    college:"KIET",
    marks:[10,23,56,45,67],
    music:()=>console.log("Play Music"),
    play:function playfun(){console.log("Play Cricket")}
}
let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name));

console.log(studentInfo.marks);
console.log(studentInfo.play());
console.log(studentInfo.music());
