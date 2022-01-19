const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    
    this.guessedLetters = []
    this.guessedLetters.push("n", "e")
}

Hangman.prototype.puzzle = function() {
    this.guessMatch = ""
    this.word.forEach((letter, pos) => {
        if (this.guessedLetters.includes(letter) || letter === " ") {
            this.guessMatch += letter
        } else {
            this.guessMatch += "*"
        }})
    return this.guessMatch
}







const inst1 = new Hangman("New Jersey", 5)
const attempt = inst1.puzzle()
console.log(attempt)

const inst2 = new Hangman("Nevada", 2)
console.log(inst2.puzzle())