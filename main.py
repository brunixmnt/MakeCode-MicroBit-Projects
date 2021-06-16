def on_logo_touched():
    basic.show_string("" + str((Math.round(grove.measure_in_centimeters_v2(DigitalPin.P2)))))
    basic.pause(200)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

basic.show_icon(IconNames.LEFT_TRIANGLE)
music.play_tone(988, music.beat(BeatFraction.HALF))

def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_string("" + str((Math.round(grove.measure_in_centimeters_v2(DigitalPin.P2)))))
    basic.pause(200)
basic.forever(on_forever)
