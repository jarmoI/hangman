const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let hangman1


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
   render()  
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = hangman1.statusMessage

    hangman1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('6')
    hangman1 = new Hangman(puzzle, 6)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

/*
promise country training 
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})


getCountry('MX').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(err)
})

getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(err)
})
*/ 