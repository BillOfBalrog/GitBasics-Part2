'use strict'

function onBallClick(elBall) {
    const currSize = elBall.offsetWidth
    const newSize = currSize + getRandomIntInclusive(20, 60)
    if (currSize === 400) newSize = 100              

    elBall.style.backgroundColor = getRandomColor()

    elBall.style.height = newSize + 'px'
    elBall.style.width = newSize + 'px'
}      

