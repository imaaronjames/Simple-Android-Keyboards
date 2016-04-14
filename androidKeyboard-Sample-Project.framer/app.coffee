## Created by Aaron James | April 14th, 2016
## Simple Android Keyoards

Android = require "androidKeyboard"

bg = new BackgroundLayer
	backgroundColor: "#eee"

## Use this function to open keyboard
Android.Keyboard("default", "light", true)
