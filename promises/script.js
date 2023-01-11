// *************NUMBER FACTS******************


// #1)
// const randomNumber = Math.floor(Math.random() * 100)
// const url = `http://numbersapi.com/${randomNumber}/?json`

// axios.get(url)
// .then(res => console.log(res.data.text))
// .catch(err => console.log(err))

// //#2)
// const numbers = [23, 56, 39, 64, 25, 66, 444]
// results = []
// for (let i = 0; i < numbers.length; i++){
//     res = axios.get(`http://numbersapi.com/${numbers[i]}/?json`)
//     results.push(res)
// }

// Promise.all(results)
//     .then(resultsArr => {
//         resultsArr.forEach(r => {
//             let myNumsList = document.createElement('ul')
//             let myNum = document.createElement('li')
//             myNum.innerHTML = r.data.text

//             document.body.appendChild(myNumsList)
//             myNumsList.appendChild(myNum)
//         })
//     })

// #3)
// const favoriteNumber = 29
// const favoriteFacts = `http://numbersapi.com/${favoriteNumber}/?json`

// favoriteNumFactsList = document.createElement('ul')

// // why do I get repeat values if I'm getting my text from a set?
// const facts = new Set()
// for (let i = 0; i < 5; i++) {
//     axios.get(favoriteFacts)
//     .then(res => {
//         facts.add(res.data.text)
//         facts.forEach(fact => {
//                 item = document.createElement('li')
//                 item.innerHTML = fact
//                 favoriteNumFactsList.appendChild(item)
//             })
//             document.body.appendChild(favoriteNumFactsList)
//         })
// }






//*******************DECK OF CARDS*********************

//#1)
// const firstDeck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=01')
// .then(res => {
//     let myDeck = res.data.deck_id
//     return axios.get(`https://deckofcardsapi.com/api/deck/${myDeck}/draw/?count=1 `)
//     .then(card => console.log(card.data.cards[0]))
// })



const container = document.createElement('div')
container.setAttribute('class', 'container')
document.body.appendChild(container)
let cardsRemaining = document.createElement('h1')
document.body.appendChild(cardsRemaining)


const addCardButton = document.createElement('button')
addCardButton.innerText = 'Add a Card'
container.appendChild(addCardButton)


const firstDeck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=01')
.then(res => {
    let remainingCards = res.data.remaining
    const myDeck = res.data.deck_id
    addCardButton.addEventListener('click', () =>{
    return axios.get(`https://deckofcardsapi.com/api/deck/${myDeck}/draw/?count=1 `)
    .then(res => {
        let card = document.createElement('img')
        card.style.width = '75px';
        card.style.height = '75px';
        document.body.appendChild(card)

        // no idea how to make this CSS show up with the cards stacked on top of each other.
        card.setAttribute('src', `${res.data.cards[0].image}`)

        cardsRemaining.innerHTML = `${res.data.remaining} cards remain in the deck`
    })
    })
})
