// #1)
// const randomNumber = Math.floor(Math.random() * 100)
// const url = `http://numbersapi.com/${randomNumber}/?json`

// async function getNum(){
//     let res = await axios.get(url)
//     console.log(res.data.text)
// }
// getNum()


// // #2)

// const numbers = [23, 56, 39, 64, 25, 66, 444]
// async function getNumbers() {
//     let res = await axios.get(`http://numbersapi.com/${numbers}/?json`)
//     console.log(res.data)
// }
// getNumbers()


// // #3)

// const favoriteNumber = 29
// async function getFacts(){
//     const facts = []
//     for (let i=0; i < 4; i++){
//         let res = await axios.get(`http://numbersapi.com/${favoriteNumber}/?json`)
//         facts.push(res.data.text)
//     }
//     let myNumsList = document.createElement('ul')
//     facts.forEach(r=> {
//         let myNum = document.createElement('li')
//                 myNum.innerHTML = r
//                 document.body.appendChild(myNumsList)
//                 myNumsList.appendChild(myNum)
//             })
// }
// getFacts()



// *********************PART 2 **************************

// #1)
// async function getCard(){
//     const firstDeck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=01')
//     let myDeck = firstDeck.data.deck_id
//     let myCard = await axios.get(`https://deckofcardsapi.com/api/deck/${myDeck}/draw/?count=1 `)
//     console.log(myCard.data.cards[0].code)
// }
// getCard()

// #3)


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
