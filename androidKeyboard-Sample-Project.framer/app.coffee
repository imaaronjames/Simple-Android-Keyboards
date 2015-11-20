## Created by Aaron James
## Simple Android Keyoards

android = require "androidKeyboard"

bg = new BackgroundLayer
	backgroundColor: "#eee"

## Use this function to open keyboard
android.keyboard("default", "light", true)
