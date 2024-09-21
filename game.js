let randomNum1 = document.getElementById("random-num1")
let randomNum2 = document.getElementById("random-num2")
let randomNum3 = document.getElementById("random-num3")

let checkButton = document.getElementById("submit-button")
let numberInput = document.getElementById("num-input")

let playerNameDisplay = document.getElementById("player-name")
let scoreDisplay = document.getElementById("score-display")
let levelDisplay = document.getElementById("level-display")
let errorMessage = document.getElementById("error-message")
let coverBox1 = document.getElementById("covering-box1")
let coverBox2 = document.getElementById("covering-box2")
let coverBox3 = document.getElementById("covering-box3")

// To generate random numbers
let randomNumbers = Array(3).fill().map(() => Math.floor(Math.random() * 10) +1)

let level = 1;
let score = 0;

randomNum1.innerText = randomNumbers[0]
randomNum2.innerText = randomNumbers[1]
randomNum3.innerText = randomNumbers[2]

// let refresh = 



checkButton.addEventListener('click', () => {
    let inputValue = numberInput.value.trim();
    
    


    if (inputValue === '') {
        errorMessage.innerText = "Please enter a number";
        return;
    } 
    if (isNaN(parseInt(inputValue))) {
        errorMessage.innerText = "Please enter a whole number";
        return;
    } 
    if (inputValue > 10) {
        errorMessage.innerHTML = "Choose number from 1 to 10"
    }

    let matchIndex = randomNumbers.findIndex(num => num === parseInt(inputValue))

    if (matchIndex !== -1) {
        errorMessage.style.color = "green"
        errorMessage.innerText = "CORRECT!"
        level++;
        score += 5;
        levelDisplay.innerText = level
        scoreDisplay.innerText = score

        coverBox1.style.opacity = "0"
        coverBox2.style.opacity = "0"
        coverBox3.style.opacity = "0"

        setTimeout(() => {
            numberInput.value = ''
            randomNumbers = Array(3).fill().map(() => Math.floor(Math.random() * 10) +1)

            randomNum1.innerText = randomNumbers[0]
            randomNum2.innerText = randomNumbers[1]
            randomNum3.innerText = randomNumbers[2]

            coverBox1.style.opacity = "1"
            coverBox2.style.opacity = "1"
            coverBox3.style.opacity = "1"

            errorMessage.innerText = ""
        }, 5000)
    } else {
        errorMessage.style.color = "red"
        errorMessage.innerText = `WRONG NUMBER (${inputValue})`

        coverBox1.style.opacity = "0"
        coverBox2.style.opacity = "0"
        coverBox3.style.opacity = "0"
        
        setTimeout(() => {
            numberInput.value = ''
            randomNumbers = Array(3).fill().map(() => Math.floor(Math.random() * 10) +1)

            randomNum1.innerText = randomNumbers[0]
            randomNum2.innerText = randomNumbers[1]
            randomNum3.innerText = randomNumbers[2]

            coverBox1.style.opacity = "1"
            coverBox2.style.opacity = "1"
            coverBox3.style.opacity = "1"

            errorMessage.innerText = ""
        }, 5000)
    } 
})



// (parseInt(inputValue) !== parseInt(randomNumber1) || parseInt(randomNumber2) || parseInt(randomNumber3))