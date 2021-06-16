def on_logo_touched():
    global USorIR
    if USorIR == 0:
        USorIR = 1
    else:
        USorIR = 0
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

USorIR = 0
basic.show_icon(IconNames.SQUARE)
music.play_tone(880, music.beat(BeatFraction.HALF))
USorIR = 0

def on_forever():
    if USorIR == 1:
        if pins.digital_read_pin(DigitalPin.P1) == 1:
            basic.show_icon(IconNames.STICK_FIGURE)
        else:
            basic.clear_screen()
    else:
        if Math.round(grove.measure_in_centimeters_v2(DigitalPin.P2)) < 15:
            basic.show_icon(IconNames.LEFT_TRIANGLE)
            music.play_tone(349, music.beat(BeatFraction.SIXTEENTH))
        else:
            basic.clear_screen()
    basic.pause(200)
basic.forever(on_forever)
