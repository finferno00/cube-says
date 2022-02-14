input.onPinPressed(TouchPin.P0, function () {
    if (action == 0) {
        game.addScore(1)
        action = -1
    } else {
        action = -2
        game.gameOver()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (action == 2) {
        game.addScore(1)
        action = -1
    } else {
        action = -2
        game.gameOver()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (action == 1) {
        game.addScore(1)
        action = -1
    } else {
        action = -2
        game.gameOver()
    }
})
let action = 0
action = -1
game.startCountdown(20000)
basic.forever(function () {
    if (game.isGameOver()) {
        action = -2
    }
    if (action == -1) {
        action = randint(0, 4)
    }
    if (action == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (action == 1) {
        basic.showLeds(`
            # # . # #
            # # # # .
            # # # . .
            # # . . .
            # # . . .
            `)
    } else if (action == 2) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (action == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (action == 4) {
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # # . # #
            . # # # .
            `)
    }
})
