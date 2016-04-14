## Created by Aaron James | April 14th, 2016
## Simple Android Keyoards

android = require "androidKeyboard"

bg = new BackgroundLayer
	backgroundColor: "#eee"

## Use this function to open keyboard
android.keyboard("default", "light", true)
