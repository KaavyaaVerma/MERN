// replacement of callback and async await functions

let age=20;
const info = new Promise((resolve,reject)=>{                             //here we have two functions as a parameters i.e. resolve and reject
        if(age>=18){
            resolve("You can vote");
        }                           
        else{
            reject("you can not vote");
        }                    
})
info.then(show=>console.log(show))
    .catch(error=>console.log(error));


const resultInfo=async()=>{            // async is oldest method for promise It does not take reject values. if so we have to use try and catch. async means compiler or interpreter does not have to hold, it will continue to execute
    try{
        let result=await info;
        console.log(result);
    } catch(error){
        console.log(error)
    }
}
resultInfo();