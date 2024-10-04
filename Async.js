// setTimeout(function(){
//     console.log("Hello, Pranjal");
// }, 2000)



// const check = setTimeout(function(){
//     console.log("Hello World");
// })

// setTimeout(check, 2000)




// let changeText = function(){
//     document.querySelector('h1').innerHTML = 'Hello user!';
// }  

// setTimeout(changeText,2000);

// let changeMe = setTimeout(changeText,2000);


// clearTimeout(changeMe);

// document.querySelector('#stop').addEventListener('click', function(){
    //     clearTimeout(changeMe);
    //     document.getElementById('stopMsg').innerText = 'Stopped!';
    
// })



 





let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let timeoutId;

function changeText() {
    document.querySelector('h1').innerHTML = 'Hello user!';
    document.getElementById('msg').innerText = 'Task is running...';
}

function start() {
    return new Promise((resolve) => {
        timeoutId = setTimeout(() => {
            changeText();
            resolve('Started!');
        }, 4000);
    });
}

function stop() {
    return new Promise((resolve) => {
        clearTimeout(timeoutId);
        document.getElementById('msg').innerText = 'Stopped!';
        resolve('Stopped!');
    });
}

startBtn.addEventListener('click', async function() {
    document.getElementById('msg').innerText = ''; // Clear previous messages
    await start(); // Wait for the start function to complete
});

stopBtn.addEventListener('click', async function() {
    document.getElementById('msg').innerText = ''; // Clear previous messages
    await stop(); // Wait for the stop function to complete
});
