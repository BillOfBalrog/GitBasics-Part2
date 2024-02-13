'use strict'

function onBallClick(elBall, maxDiameter) {
    const currSize = elBall.offsetWidth
    const newSize = currSize > maxDiameter ? 100 : currSize + getRandomIntInclusive(20, 60)
    
    elBall.style.backgroundColor = getRandomColor()
    elBall.innerText = newSize
    elBall.style.height = newSize + 'px'
    elBall.style.width = newSize + 'px'
}      

