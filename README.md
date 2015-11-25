# Simple-Android-Keyboards
Easily add a static Android Keyboard to your Framer Studio project with just one line of code. Keyboards types include: default, numbers, symbols, dialpad, and voice.

## Installation

1. Download the androidKeyboard.coffee file and keyboards folder.
2. Create a framer project and drop both androidKeyboard.coffee and keyboards folder inside your /modules folder.
3. Add `android = require 'androidKeyboard'` at the top of your document.

More info about modules for Framer Studio: [FramerJS Docs - Modules](http://framerjs.com/docs/#modules)

![TextLayer](https://raw.githubusercontent.com/imaaronjames/Simple-Android-Keyboards/master/androidKeyboard-Sample-Project.framer/images/samplecode.png)

![TextLayer](https://raw.githubusercontent.com/imaaronjames/Simple-Android-Keyboards/master/androidKeyboard-Sample-Project.framer/images/keyboards.jpg)

## How to use this module
You only need one line of code to make Simple Android Keyboards work. It looks a little something like this:

&nbsp;&nbsp;&nbsp;&nbsp;`android.keyboard("default", "light", true)`

### Simple customization
There are three parameters you can change: keyboardType, keyboardTheme, and hasAutoCorrect

&nbsp;&nbsp;&nbsp;&nbsp;**keyboardType** (string) -- default, numbers, symbols, dialpad, voice

&nbsp;&nbsp;&nbsp;&nbsp;**keyboardTheme** (string) -- light or dark

&nbsp;&nbsp;&nbsp;&nbsp;**hasAutoCorrect** (boolean) -- true = show, false = hide

## Adding Events to the done button
Any Event can be assigned to the done button. To do this, use this line:

&nbsp;&nbsp;&nbsp;&nbsp;`doneBTN.on Events.Click, ->`

___
That's it! the keyboard will automatically animate in for you. When you tap the done button in the bottom right hand corner, the keyboard will dismiss itself and destroy the layers that were created. Simple.
