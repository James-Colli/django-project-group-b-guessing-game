// let genCon = document.getElementById("gen-cont")

// setTimeout(() => {
//     genCon.classList.add('fade-out');
//     setTimeout(() => {
//         window.location.href = 'game.html'
//     }, 1000);
// }, 10000);

let letter1 = document.getElementById("letter1")
let letter2 = document.getElementById("letter2")
let letter3 = document.getElementById("letter3")


setTimeout(() => {
    letter1.style.transform = "translateX(345px) translateY(75px) rotate(-18deg)"
    letter1.style.transition = "transform 3s"

    letter2.style.transform = " translateY(-470px) rotate(5deg)"
    letter2.style.transition = "transform 3s"

    letter3.style.transform = " translateX(-359px) translateY(85px) rotate(24deg)"
    letter3.style.transition = "transform 3s"
}, 100)