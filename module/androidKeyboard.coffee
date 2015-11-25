# Module created by Aaron James | November 19th, 2015
#
# Add the following line at the top of your project to access this module:
# android = require "androidKeyboard"
#
# Reference the contents by using this function:
# android.keyboard("default", "light", true)
#
# Available options:
# keyboardTypes: default, numbers, symbols, dialpad, voice
# keyboardTheme: light, dark
# hasAutoCorrect: true or false
#
# If you change the directory of the images, update dir below with the correct file path

exports.keyboard = (keyboardType, keyboardTheme, hasAutoCorrect) ->

	## Define the directory the images live in and the image format
	dir = "modules/keyboards/"
	imgFormat = ".png"

	## Identify keyboard type
	if keyboardType == "default" then type = "keyboard" else type = "keyboard"
	if keyboardType == "numbers" then type = "numbers"
	if keyboardType == "symbols" then type = "symbols"
	if keyboardType == "dialpad" then type = "dialpad"
	if keyboardType == "voice" then type = "voice"

	## Identify keyboard theme
	if keyboardTheme == "light" then theme = "Light" else theme = "Light"
	if keyboardTheme == "dark" then theme = "Dark"

	## Identify if AutoCorrect is needed
	if hasAutoCorrect == true then ac = "AC" else ac = ""
	if type == "dialpad" then ac = ""
	if ac == "AC" then keyboardHeight = 790 else keyboardHeight = 670

	## constructing the filename
	filename = dir + type + theme + ac + imgFormat

	## If voice keyboard, overwrite all of the above
	if type == "voice" then filename = dir + "voice" + imgFormat

	## creating the keyboard layers
	keyboard = new Layer
		name: type + theme + ac
		x: 0, maxY: Screen.height + keyboardHeight
		width: Screen.width, height: keyboardHeight
		image: filename
		shadowBlur: 6, shadowColor: "rgba(0,0,0,0.24)"
	keyboard.states.add
		down: maxY: Screen.height + keyboardHeight
		up: maxY: Screen.height
	keyboard.states.animationOptions = time: 0.3

	window["doneBTN"] = new Layer
		name: "doneBTN"
		superLayer: keyboard
		x: Screen.width - 160, y: 620
		width: 156, height: 150
		backgroundColor: null

	if keyboardType == "voice" then doneBTN.y = 0

	## Defining the layer animations on load
	keyboard.states.switch("up")
	doneBTN.on Events.Click, ->
		keyboard.states.switch("down")
		Utils.delay 1, ->
			keyboard.destroy()
