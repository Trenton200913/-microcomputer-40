input.onButtonPressed(Button.A, function () {
    smarthome.motorFan(AnalogPin.P0, false)
    basic.showString("moter fan off")
})
input.onButtonPressed(Button.B, function () {
    smarthome.motorFan(AnalogPin.P1, true)
    basic.showString("moter fan on")
})
input.onGesture(Gesture.Shake, function () {
    smarthome.motorFan(AnalogPin.P1, true)
    smarthome.crashSensorSetup(DigitalPin.P10)
    basic.showString("Crash senser on")
})
music.playMelody("- - G A G A - B ", 143)
basic.clearScreen()
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # # . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)
basic.pause(100)
basic.clearScreen()
basic.showString("MICROCOMPUTER OS 4.0 the final major update")
basic.clearScreen()
basic.showString("(C)TMB LTD")
basic.clearScreen()
basic.forever(function () {
	
})
