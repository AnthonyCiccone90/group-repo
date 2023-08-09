var searchedWord = document.getElementById("search")
var submit = document.querySelector("#submit")
var cards = document.querySelector("#card-display")
var imagesPop = []

function callScryfall(event) {
    event.preventDefault()
    var userInput = searchedWord.value
    console.log(userInput)
    var reqApi = `https://api.scryfall.com/cards/search?q=${userInput}`

    fetch(reqApi)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data)
            var cardsFound = data.data
            for (let index = 0; index < cardsFound.length; index++) {
                const element = cardsFound[index];
                var cardIMG = document.createElement("img")
                cardIMG.src = (data.data[index].image_uris.normal)
                cards.appendChild(cardIMG)
                
            }
            })
        }
;

submit.addEventListener("click", callScryfall)