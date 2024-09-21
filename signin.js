let passwordInput = document.getElementById("password-signin-input")

let usernameInput = document.getElementById("username-signin-input")

let emailInput = document.getElementById("email-signin-input")

let submitButton = document.getElementById("submitButton")

let errorMessage =document.getElementById("error-message")


submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    let username = usernameInput.value;
    let password = passwordInput.value;
    let email = emailInput.value;
    // let regex = /^(?=[a-z])(?=.[A-Z])(?=\d)(?=.[@$!%*?&])[A-Zaz\d@$!%*?&]{5,}$/;

    if (username === '' || email === '' || password === '') {
        errorMessage.innerText = 'Fill in the empty spaces';
    } else if (email.indexOf('@') === -1) {
        errorMessage.innerText = 'Please enter a valid email'
    } else if (password.length <= 5) {
        errorMessage.innerText = 'Password must be at least 5 characters';
    } else {
        window.location.href = 'game.html';
    }

})



// ANIMATION
let letter1 = document.getElementById("letter1")
let letter2 = document.getElementById("letter2")
let letter3 = document.getElementById("letter3")
let letter4 = document.getElementById("letter4")
let letter5 = document.getElementById("letter5")
let letter6 = document.getElementById("letter6")
let letter7 = document.getElementById("letter7")
let letter8 = document.getElementById("letter8")
let letter9 = document.getElementById("letter9")
let letter10 = document.getElementById("letter10")
let letter11 = document.getElementById("letter11")

setTimeout(() => {
    letter1.style.transform = "translateY(-550px)"
    letter1.style.transition = "transform 3s"
    letter1.style.opacity = "1"
}, 100)

setTimeout(() => {
    letter2.style.transform = "translateY(-480px)"
    letter2.style.transition = "transform 3s"
    letter2.style.opacity = "1"
}, 900)

setTimeout(() => {
    letter3.style.transform = "translateY(-410px)"
    letter3.style.transition = "transform 3s"
    letter3.style.opacity = "1"
}, 1700)

setTimeout(() => {
    letter4.style.transform = "translateY(-340px)"
    letter4.style.transition = "transform 3s"
    letter4.style.opacity = "1"
}, 2500)

setTimeout(() => {
    letter5.style.transform = "translateY(-270px)"
    letter5.style.transition = "transform 3s"
    letter5.style.opacity = "1"
}, 3300)

setTimeout(() => {
    letter6.style.transform = "translateY(-200px)"
    letter6.style.transition = "transform 3s"
    letter6.style.opacity = "1"
}, 4100)

setTimeout(() => {
    letter7.style.transform = "translateY(-130px)"
    letter7.style.transition = "transform 3s"
    letter7.style.opacity = "1"
}, 4900)

setTimeout(() => {
    letter8.style.transform = "translateY(-60px)"
    letter8.style.transition = "transform 3s"
    letter8.style.opacity = "1"
}, 5700)

setTimeout(() => {
    letter9.style.transform = "translateX(-1250px)"
    letter9.style.transition = "transform 3s"
    letter9.style.opacity = "1"
}, 900)
setTimeout(() => {
    letter10.style.transform = "translateX(-1180px)"
    letter10.style.transition = "transform 3s"
    letter10.style.opacity = "1"
}, 1700)

setTimeout(() => {
    letter11.style.transform = "translateX(-1130px)"
    letter11.style.transition = "transform 3s"
    letter11.style.opacity = "1"
}, 2500)



// else if (!regex.test(password)){
//     errorMessage.innerText = 'Password must contain at least one lowercase, one uppercase, one number and one special character'
// }