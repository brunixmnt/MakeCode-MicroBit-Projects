input.onButtonPressed(Button.A, function () {
    powerfunctions.setSpeed(PowerFunctionsMotor.Red1, 3)
    powerfunctions.setSpeed(PowerFunctionsMotor.Red2, 3)
})
input.onButtonPressed(Button.B, function () {
    powerfunctions.brake(PowerFunctionsMotor.Red1)
    powerfunctions.brake(PowerFunctionsMotor.Red2)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (USorIR == 0) {
        USorIR = 1
    } else {
        USorIR = 0
    }
})
let USorIR = 0
basic.showIcon(IconNames.Square)
music.playTone(880, music.beat(BeatFraction.Half))
USorIR = 0
powerfunctions.connectIrLed(AnalogPin.P0)
powerfunctions.setMotorDirection(PowerFunctionsMotor.Red1, PowerFunctionsDirection.Left)
powerfunctions.setMotorDirection(PowerFunctionsMotor.Red2, PowerFunctionsDirection.Left)
basic.forever(function () {
    if (USorIR == 1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            basic.showIcon(IconNames.StickFigure)
        } else {
            basic.clearScreen()
        }
    } else {
        if (Math.round(grove.measureInCentimetersV2(DigitalPin.P2)) < 15) {
            basic.showIcon(IconNames.LeftTriangle)
            music.playTone(349, music.beat(BeatFraction.Sixteenth))
        } else {
            basic.clearScreen()
        }
    }
    basic.pause(200)
})
