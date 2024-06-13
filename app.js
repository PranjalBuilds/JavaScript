//let btn = document.getElementById('btn');

// using click eventlisener

// btn.addEventListener('click', () => {
//   console.log('clicked');
// })          

// get all info about the button

// btn.addEventListener('click', (event) => {
//   console.log(event);
// })

// get the btn element (HTML)

// btn.addEventListener('click', (event) => {
//   console.log(event.target);
// })


// get the btn element text

// btn.addEventListener('click', (event) => {
//   console.log(event.target.innerText);
// })

// made a function to handle the click event


// clickHandler = (event) => {
//   console.log(event);
// }

// btn.addEventListener('click' , clickHandler)

// querySelector :  you can target ids and classes both using querySelector.

// let btn = document.querySelector('.btn')
let btns = document.querySelectorAll('.btn');

// btns.addEventListener('click', (e) => {
//   console.log(e.target.innerText + " was clicked");
// });

// mouse events : click, mouseover, mouseout, mousedown, mouseup, mousemove, mouseenter, mouseleave, keyup, keydown, keypress, etc...

//On mouse click

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     console.log(e.target.innerText + " was clicked");
//   })
// })

//On mouse over

btns.forEach((btn) => {
  btn.addEventListener('mouseover', (e) => {
    console.log(e.target.innerText + " was hovered");
  })
})

let nameInput = document.getElementById('name')

nameInput.addEventListener('keyup', (e)=>{
    console.log(e.key)
})


nameInput.addEventListener('click', ()=>{
    console.log('user is now entering the text')
})