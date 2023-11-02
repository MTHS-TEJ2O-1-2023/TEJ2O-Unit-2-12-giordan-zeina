/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Oct 2023
 * This program uses the distance sensor to turn all the neopixels to red, if the distance is < 10 cm
 * and also turn the neopixels to green, if the distance is >= 10 cm
*/

// variables
let distance: number = 0
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// input
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  if (distance < 10) {
    // if the distance is < 10 turns the neopixels Red
    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)
  } else {
    // if the distance is > 10 turns the neopixels Green
    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
  }

  basic.showNumber(distance)
  basic.showIcon(IconNames.Happy)
})
