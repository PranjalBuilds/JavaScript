// console.log('task 1')
// setTimeout(()=>{
//     console.log('download started')
// },2000)
// console.log('download completed')

// let startDownload = new Promise ((resolve, reject)=>{
//     console.log('download started')
//     setTimeout(()=>{
//         reject();
//     },3000)
// })

// startDownload.then(()=> {
//     console.log('download completed')
// }, () =>{
//     console.log('download failed')
// })


// fetch = used to fetch data from url => promise

// let randomQuoteIndex = Math.floor(Math.random() * 15)
// console.log(randomQuoteIndex)
// fetch('https://type.fit/api/quotes').then((resp) => {
//     return resp.json()
// }).then((quotes) => {
//     console.log(quotes[randomQuoteIndex].text)
// })

fetchQuote=()=>{
    let randomQuoteIndex = Math.floor(Math.random() * 15)
    fetch('https://type.fit/api/quotes').then((resp) => {
        return resp.json()
    }).then((quotes) => {
        document.getElementById('quote').innerText = quotes[randomQuoteIndex].text;
        document.getElementById('author').innerText = quotes[randomQuoteIndex].author;
    })
}

fetchQuote()