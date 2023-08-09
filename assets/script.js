var searchedWord = document.getElementById("search")
var submit = document.querySelector("#submit")

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
    })
}

submit.addEventListener("click", callScryfall)