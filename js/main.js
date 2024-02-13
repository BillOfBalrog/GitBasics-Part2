'use strict'

function onBallClick(elBall, maxDiameter) {
    const currSize = elBall.offsetWidth
    const newSize = currSize > maxDiameter ? 100 : currSize + getRandomIntInclusive(20, 60)
    
    elBall.style.backgroundColor = getRandomColor()
    elBall.innerText = newSize
    elBall.style.height = newSize + 'px'
    elBall.style.width = newSize + 'px'
}      

function onBallClick3(elBall) {
    const ball1Element = document.querySelector('.ball1');
    const ball2Element = document.querySelector('.ball2');

    const ball1Color = window.getComputedStyle(ball1Element).backgroundColor;
    const ball2Color = window.getComputedStyle(ball2Element).backgroundColor;
    const ball1Size = ball1Element.offsetWidth
    const ball2Size = ball2Element.offsetWidth

    ball1Element.style.backgroundColor = ball2Color
    ball2Element.style.backgroundColor = ball1Color

    ball1Element.style.width = ball1Element.style.height = ball2Size + 'px'
    ball2Element.style.width = ball2Element.style.height = ball1Size + 'px'

}                                          

