input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("" + (Math.round(grove.measureInCentimetersV2(DigitalPin.P2))))
    basic.pause(200)
})
basic.showIcon(IconNames.LeftTriangle)
music.playTone(988, music.beat(BeatFraction.Half))
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (Math.round(grove.measureInCentimetersV2(DigitalPin.P2))))
    }
    basic.pause(200)
})
