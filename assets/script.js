var searchedWord = document.getElementById("search")
var submit = document.querySelector("#submit")
var cards = document.querySelector("#cards")
var dropdown = document.querySelector("#options")
var imagesPop = []

function callScryfall(event) {
    cards.innerHTML=""
    event.preventDefault()
    var userInput = searchedWord.value
    var userOption = dropdown.value
    console.log(userOption)
    console.log(userInput)
    var reqApi = `https://api.magicthegathering.io/v1/cards?${userOption}=${userInput}`

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
                
                // ternary operator that checks if `data.cards.imageUrl contains a URL
                data.cards[index].imageUrl ? 
                cardIMG.src = (data.cards[index].imageUrl) : cardIMG.src = './assets/Pictures/mtg_placeholder_2fc0d9ab-fcf0-448a-8c7c-566ae90fbf14_800x.webp'

                console.log('george was here')

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