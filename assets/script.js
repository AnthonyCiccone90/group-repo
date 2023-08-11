var searchedWord = document.getElementById("search")
var submit = document.querySelector("#submit")
var cards = document.querySelector("#cards")
var imagesPop = []

function callScryfall(event) {
    cards.innerHTML=""
    event.preventDefault()
    var userInput = searchedWord.value
    console.log(userInput)
    var reqApi = `https://api.magicthegathering.io/v1/cards?name=${userInput}`

    fetch(reqApi)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data)
            var cardsFound = data.cards
            for (let index = 0; index < cardsFound.length; index++) {
                const element = cardsFound[index];
                var cardIMG = document.createElement("img")
                cardIMG.src = (data.cards[index].imageUrl)
                cards.appendChild(cardIMG)
                
            }
            })
        }
;

submit.addEventListener("click", callScryfall)