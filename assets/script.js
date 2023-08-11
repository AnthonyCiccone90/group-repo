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
                var cardDiv = document.createElement("div")
                var cardIMG = document.createElement("img")
                cardIMG.src = (data.cards[index].imageUrl)
                var getArt = data.cards[index].artist
                var artTag = document.createElement("p")
                artTag.textContent = `Artist: ${getArt}`
                var getSet = data.cards[index].setName
                var setTag = document.createElement("p")
                setTag.textContent =`Set: ${getSet}`
                var cardInfo = document.createElement("div")
                cardInfo.appendChild(artTag)
                cardInfo.appendChild(setTag)
                cardDiv.appendChild(cardIMG)
                cardDiv.appendChild(cardInfo)
                cards.appendChild(cardDiv)
                
                
            }
            })
        }
;

submit.addEventListener("click", callScryfall)