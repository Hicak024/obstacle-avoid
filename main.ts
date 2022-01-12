input.onButtonPressed(Button.A, function () {
    if (led.point(4, 4)) {
        led.unplot(4, 4)
        led.plot(3, 4)
    } else if (led.point(3, 4)) {
        led.unplot(3, 4)
        led.plot(2, 4)
    } else if (led.point(2, 4)) {
        led.unplot(2, 4)
        led.plot(1, 4)
    } else if (led.point(1, 4)) {
        led.unplot(1, 4)
        led.plot(0, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (led.point(0, 4)) {
        led.unplot(0, 4)
        led.plot(1, 4)
    } else if (led.point(1, 4)) {
        led.unplot(1, 4)
        led.plot(2, 4)
    } else if (led.point(2, 4)) {
        led.unplot(2, 4)
        led.plot(3, 4)
    } else if (led.point(3, 4)) {
        led.unplot(3, 4)
        led.plot(4, 4)
    }
})
function smrť () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showLeds(`
        . # . . .
        # # # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        # # # . .
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # # . .
        . . . . .
        . . . . .
        `)
    led.enable(false)
}
led.plot(2, 4)
basic.forever(function () {
    basic.pause(1000)
    if (led.point(0, 0)) {
        led.unplot(0, 0)
        led.plot(0, 1)
    } else if (led.point(0, 1)) {
        led.unplot(0, 1)
        led.plot(0, 2)
    } else if (led.point(0, 2)) {
        led.unplot(0, 2)
        led.plot(0, 3)
    }
    if (led.point(1, 0)) {
        led.unplot(1, 0)
        led.plot(1, 1)
    } else if (led.point(1, 1)) {
        led.unplot(1, 1)
        led.plot(1, 2)
    } else if (led.point(1, 2)) {
        led.unplot(1, 2)
        led.plot(1, 3)
    }
    if (led.point(2, 0)) {
        led.unplot(2, 0)
        led.plot(2, 1)
    } else if (led.point(2, 1)) {
        led.unplot(2, 1)
        led.plot(2, 2)
    } else if (led.point(2, 2)) {
        led.unplot(2, 2)
        led.plot(2, 3)
    }
    if (led.point(3, 0)) {
        led.unplot(3, 0)
        led.plot(3, 1)
    } else if (led.point(3, 1)) {
        led.unplot(3, 1)
        led.plot(3, 2)
    } else if (led.point(3, 2)) {
        led.unplot(3, 2)
        led.plot(3, 3)
    }
    if (led.point(4, 0)) {
        led.unplot(4, 0)
        led.plot(4, 1)
    } else if (led.point(4, 1)) {
        led.unplot(4, 1)
        led.plot(4, 2)
    } else if (led.point(4, 2)) {
        led.unplot(4, 2)
        led.plot(4, 3)
    }
})
basic.forever(function () {
    basic.pause(1000)
    led.plot(randint(0, 4), 0)
})
basic.forever(function () {
    if (led.point(0, 4) && led.point(0, 3)) {
        smrť()
    } else {
        led.unplot(0, 3)
    }
})
basic.forever(function () {
    if (led.point(1, 3) && led.point(1, 4)) {
        smrť()
    } else {
        led.unplot(1, 3)
    }
})
basic.forever(function () {
    if (led.point(3, 4) && led.point(3, 3)) {
        smrť()
    } else {
        led.unplot(3, 3)
    }
})
basic.forever(function () {
    if (led.point(2, 3) && led.point(2, 4)) {
        smrť()
    } else {
        led.unplot(2, 3)
    }
})
basic.forever(function () {
    if (led.point(4, 3) && led.point(4, 4)) {
        smrť()
    } else {
        led.unplot(4, 3)
    }
})
