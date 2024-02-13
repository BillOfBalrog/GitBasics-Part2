'use strict'

function onBallClick(elBall) {
    const currSize = elBall.offsetWidth
    const newSize = currSize + 50       

    elBall.style.height = newSize + 'px'
    elBall.style.width = newSize + 'px'
}      

