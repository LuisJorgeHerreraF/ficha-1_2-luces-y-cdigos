/**
 * Si se oprime el botón A el corazón palpita dependiendo del número de pulsaciones del botón A
 */
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.clearScreen()
})
