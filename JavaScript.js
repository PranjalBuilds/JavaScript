// topics
// for, forEach, find, Array mapping and filters, find, object
// NOTE : RUN THE CODE TOPIC BY TOPIC, COMMENT ELSE 

//for 

// for loop to iterate odd no. 
// for (let i = 1; i <= 10; i++) {
//     if(i % 2 != 0)
//         console.log(i);
// }

// const no = [1,2,3,4,5,6,7,8,9,10];

// // for loop to iterate odd no. from given array

// for (let i = 0; i < no.length; i++) {
//     if(no[i] % 2 != 0) {
//         console.log(no[i]);
//     }
// }        

// // made a function to print even no. when button is clicked(u've to make the button)
// function evenNumbers() {
//     no.forEach(evenNumber => {
//         if (evenNumber % 2 == 0)
//             console.log(evenNumber);
//     });
// }

// evenNumbers();




// //forEach

// let newArr = [1,2,3,4,5,6,7,8,9,10];

// newArr.forEach((val)=> {
//     if(val % 2 == 0) {
//         console.log('Even!');
//     }
// })

// // the reason why this code gives 10 times odd because, forEach creates as same instances as it's array has. so it created 10 spaces and put the the outcome [even] into it.




// // Mapping
// // mapping has one difference to forEach is, it returns an array in return.


// let myArr = [12,4,5,2,13,22];

// let tempArr = myArr.map((val) => {
//     return val * 2;
// })
    
// console.log(tempArr);




// //filters

// // filter filters some sort of data (in the form of an array) that we need from an array. 

// let myAns = myArr.filter(function(val){
//     if(val < 5)
//         return true;  // filter works on boolean value... so we don't have to 'return val'.
//     else
//         return false;   
// })

// console.log(myAns);



// // find 

// //finds the first instance from one of the elements of the given data structure

// myTemp = [1,2,3,3,4]

// let tempAns = myTemp.find((val)=>{
//     if(val === 3)
//         return val;
// })

//  console.log(tempAns); // returns 3... but the first one in the array

//  console.log(myTemp.indexOf(3)); // it'll give index of 2 which means third element of myTemp.




//  // Object
// // in object, we can store a bunch of data same as json() (javascript object notation)

// var obj = {
//     name : "Pranjal",
//     twitter : "@PranjalDevHub",
// }

// console.log(obj.name); // or     obj['name']
// console.log(obj.twitter); // or     obj['twitter']


// var temp = 12;

// var check = {
//     a : temp        // accessing value from a variable
// }

// console.log(check.a); 

// check.a = 2; // changing the value of object
// console.log(check.a);

// // if we don't want to change the value of object, then put this two lines before changing the value of an object

// Object.freeze(check);
// console.log(check.a);


//Promises 

const myAge = 21; 
const pinkyPromise = new Promise(function(res, rej){
    if(myAge >= 21)
        return res();
    else return rej();
})

pinkyPromise
.then(function () {
    console.log("Done!");
})
.catch(function(){
    console.log("Do it again!"); 
})



var ans = new Promise((res, rej) => {
    let n = Math.floor(Math.random() * 10);

    if (n < 5) {
        return res();
    }

    else return rej();
})

ans.then(()=>{
    console.log("You are good to go!");
}).catch(()=>{
    console.log("run again!");
})



// Promises in asynchronous tasks
// Promise Chaining

//1.come to home
//2.lock the door
//3.get refreshed!
//4.get back to the work
//5.sleep!

let ans = new Promise((res, rej)=>{
    return res("come to the home!");
})

let ans2 = ans.then((data)=>{
    console.log(data);
    return new Promise((res, rej)=>{
        return res("lock the door!");
    });
})

let ans3 = ans2.then((data)=>{
    console.log(data);
    return new Promise((res, rej)=>{
        return res("get refreshed!");
    });
})

//and so on!