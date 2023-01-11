const deck = {
    async initNewDeck() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/')
        this.deck_id = res.data.deck_id
    },

    async shuffle(){
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deck_id}/shuffle/`)
    },
    
    async drawCard(){
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=1`)
        console.log(res)
    }
    
}