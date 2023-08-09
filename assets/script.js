var searchedWord = document.getElementById("search")
var submit = document.querySelector("#submit")
var cards = document.querySelector("#card-display")

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
            var cardsFound = []
                var cardIMG = document.createElement("img")
                cardIMG.src = (data.data[0].image_uris.png)
                cards.appendChild(cardIMG)
            })

        };

submit.addEventListener("click", callScryfall)