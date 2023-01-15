// #1)
const randomNumber = Math.floor(Math.random() * 100)
const url = `http://numbersapi.com/${randomNumber}/?json`

async function getNum(){
    let res = await axios.get(url)
    console.log(res.data.text)
}
getNum()


// #2)

const numbers = [23, 56, 39, 64, 25, 66, 444]
async function getNumbers() {
    let res = await axios.get(`http://numbersapi.com/${numbers}/?json`)
    console.log(res.data)
}
getNumbers()


// #3)

const favoriteNumber = 29
async function getFacts(){
    const facts = []
    for (let i=0; i < 4; i++){
        let res = await axios.get(`http://numbersapi.com/${favoriteNumber}/?json`)
        facts.push(res.data.text)
    }
    let myNumsList = document.createElement('ul')
    facts.forEach(r=> {
        let myNum = document.createElement('li')
                myNum.innerHTML = r
                document.body.appendChild(myNumsList)
                myNumsList.appendChild(myNum)
            })
}
getFacts()
