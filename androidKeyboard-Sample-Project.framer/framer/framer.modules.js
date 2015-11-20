require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"androidKeyboard":[function(require,module,exports){
exports.keyboard = function(keyboardType, keyboardTheme, hasAutoCorrect) {
  var ac, dir, doneBTN, filename, imgFormat, keyboard, keyboardHeight, theme, type;
  dir = "modules/keyboards/";
  imgFormat = ".png";
  if (keyboardType === "default") {
    type = "keyboard";
  } else {
    type = "keyboard";
  }
  if (keyboardType === "numbers") {
    type = "numbers";
  }
  if (keyboardType === "symbols") {
    type = "symbols";
  }
  if (keyboardType === "dialpad") {
    type = "dialpad";
  }
  if (keyboardType === "voice") {
    type = "voice";
  }
  if (keyboardTheme === "light") {
    theme = "Light";
  } else {
    theme = "Light";
  }
  if (keyboardTheme === "dark") {
    theme = "Dark";
  }
  if (hasAutoCorrect === true) {
    ac = "AC";
  } else {
    ac = "";
  }
  if (type === "dialpad") {
    ac = "";
  }
  if (ac === "AC") {
    keyboardHeight = 790;
  } else {
    keyboardHeight = 670;
  }
  filename = dir + type + theme + ac + imgFormat;
  if (type === "voice") {
    filename = dir + "voice" + imgFormat;
  }
  keyboard = new Layer({
    name: type + theme + ac,
    x: 0,
    maxY: Screen.height + keyboardHeight,
    width: Screen.width,
    height: keyboardHeight,
    image: filename,
    shadowBlur: 6,
    shadowColor: "rgba(0,0,0,0.24)"
  });
  keyboard.states.add({
    down: {
      maxY: Screen.height + keyboardHeight
    },
    up: {
      maxY: Screen.height
    }
  });
  keyboard.states.animationOptions = {
    time: 0.3
  };
  doneBTN = new Layer({
    name: "doneBTN",
    superLayer: keyboard,
    x: Screen.width - 160,
    y: 620,
    width: 156,
    height: 150,
    backgroundColor: null
  });
  if (keyboardType === "voice") {
    doneBTN.y = 0;
  }
  keyboard.states["switch"]("up");
  return doneBTN.on(Events.Click, function() {
    keyboard.states["switch"]("down");
    return Utils.delay(1, function() {
      return keyboard.destroy();
    });
  });
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWFyb25qYW1lcy9Ecm9wYm94L0ZyYW1lci9TaW1wbGUtQW5kcm9pZC1LZXlib2FyZHMvYW5kcm9pZEtleWJvYXJkLVNhbXBsZS1Qcm9qZWN0LmZyYW1lci9tb2R1bGVzL2FuZHJvaWRLZXlib2FyZC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNlQSxPQUFPLENBQUMsUUFBUixHQUFtQixTQUFDLFlBQUQsRUFBZSxhQUFmLEVBQThCLGNBQTlCO0FBR2xCLE1BQUE7RUFBQSxHQUFBLEdBQU07RUFDTixTQUFBLEdBQVk7RUFHWixJQUFHLFlBQUEsS0FBZ0IsU0FBbkI7SUFBa0MsSUFBQSxHQUFPLFdBQXpDO0dBQUEsTUFBQTtJQUF5RCxJQUFBLEdBQU8sV0FBaEU7O0VBQ0EsSUFBRyxZQUFBLEtBQWdCLFNBQW5CO0lBQWtDLElBQUEsR0FBTyxVQUF6Qzs7RUFDQSxJQUFHLFlBQUEsS0FBZ0IsU0FBbkI7SUFBa0MsSUFBQSxHQUFPLFVBQXpDOztFQUNBLElBQUcsWUFBQSxLQUFnQixTQUFuQjtJQUFrQyxJQUFBLEdBQU8sVUFBekM7O0VBQ0EsSUFBRyxZQUFBLEtBQWdCLE9BQW5CO0lBQWdDLElBQUEsR0FBTyxRQUF2Qzs7RUFHQSxJQUFHLGFBQUEsS0FBaUIsT0FBcEI7SUFBaUMsS0FBQSxHQUFRLFFBQXpDO0dBQUEsTUFBQTtJQUFzRCxLQUFBLEdBQVEsUUFBOUQ7O0VBQ0EsSUFBRyxhQUFBLEtBQWlCLE1BQXBCO0lBQWdDLEtBQUEsR0FBUSxPQUF4Qzs7RUFHQSxJQUFHLGNBQUEsS0FBa0IsSUFBckI7SUFBK0IsRUFBQSxHQUFLLEtBQXBDO0dBQUEsTUFBQTtJQUE4QyxFQUFBLEdBQUssR0FBbkQ7O0VBQ0EsSUFBRyxJQUFBLEtBQVEsU0FBWDtJQUEwQixFQUFBLEdBQUssR0FBL0I7O0VBQ0EsSUFBRyxFQUFBLEtBQU0sSUFBVDtJQUFtQixjQUFBLEdBQWlCLElBQXBDO0dBQUEsTUFBQTtJQUE2QyxjQUFBLEdBQWlCLElBQTlEOztFQUdBLFFBQUEsR0FBVyxHQUFBLEdBQU0sSUFBTixHQUFhLEtBQWIsR0FBcUIsRUFBckIsR0FBMEI7RUFHckMsSUFBRyxJQUFBLEtBQVEsT0FBWDtJQUF3QixRQUFBLEdBQVcsR0FBQSxHQUFNLE9BQU4sR0FBZ0IsVUFBbkQ7O0VBR0EsUUFBQSxHQUFlLElBQUEsS0FBQSxDQUNkO0lBQUEsSUFBQSxFQUFNLElBQUEsR0FBTyxLQUFQLEdBQWUsRUFBckI7SUFDQSxDQUFBLEVBQUcsQ0FESDtJQUNNLElBQUEsRUFBTSxNQUFNLENBQUMsTUFBUCxHQUFnQixjQUQ1QjtJQUVBLEtBQUEsRUFBTyxNQUFNLENBQUMsS0FGZDtJQUVxQixNQUFBLEVBQVEsY0FGN0I7SUFHQSxLQUFBLEVBQU8sUUFIUDtJQUlBLFVBQUEsRUFBWSxDQUpaO0lBSWUsV0FBQSxFQUFhLGtCQUo1QjtHQURjO0VBTWYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFoQixDQUNDO0lBQUEsSUFBQSxFQUFNO01BQUEsSUFBQSxFQUFNLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLGNBQXRCO0tBQU47SUFDQSxFQUFBLEVBQUk7TUFBQSxJQUFBLEVBQU0sTUFBTSxDQUFDLE1BQWI7S0FESjtHQUREO0VBR0EsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBaEIsR0FBbUM7SUFBQSxJQUFBLEVBQU0sR0FBTjs7RUFFbkMsT0FBQSxHQUFjLElBQUEsS0FBQSxDQUNiO0lBQUEsSUFBQSxFQUFNLFNBQU47SUFDQSxVQUFBLEVBQVksUUFEWjtJQUVBLENBQUEsRUFBRyxNQUFNLENBQUMsS0FBUCxHQUFlLEdBRmxCO0lBRXVCLENBQUEsRUFBRyxHQUYxQjtJQUdBLEtBQUEsRUFBTyxHQUhQO0lBR1ksTUFBQSxFQUFRLEdBSHBCO0lBSUEsZUFBQSxFQUFpQixJQUpqQjtHQURhO0VBT2QsSUFBRyxZQUFBLEtBQWdCLE9BQW5CO0lBQWdDLE9BQU8sQ0FBQyxDQUFSLEdBQVksRUFBNUM7O0VBR0EsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFELENBQWYsQ0FBdUIsSUFBdkI7U0FDQSxPQUFPLENBQUMsRUFBUixDQUFXLE1BQU0sQ0FBQyxLQUFsQixFQUF5QixTQUFBO0lBQ3hCLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBRCxDQUFmLENBQXVCLE1BQXZCO1dBQ0EsS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWUsU0FBQTthQUNkLFFBQVEsQ0FBQyxPQUFULENBQUE7SUFEYyxDQUFmO0VBRndCLENBQXpCO0FBbkRrQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIE1vZHVsZSBjcmVhdGVkIGJ5IEFhcm9uIEphbWVzIHwgTm92ZW1iZXIgMTl0aCwgMjAxNVxuI1xuIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIGF0IHRoZSB0b3Agb2YgeW91ciBwcm9qZWN0IHRvIGFjY2VzcyB0aGlzIG1vZHVsZTpcbiMgYW5kcm9pZCA9IHJlcXVpcmUgXCJhbmRyb2lkS2V5Ym9hcmRcIlxuI1xuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IHVzaW5nIHRoaXMgZnVuY3Rpb246XG4jIGFuZHJvaWQua2V5Ym9hcmQoXCJkZWZhdWx0XCIsIFwibGlnaHRcIiwgdHJ1ZSlcbiNcbiMgQXZhaWxhYmxlIG9wdGlvbnM6XG4jIGtleWJvYXJkVHlwZXM6IGRlZmF1bHQsIG51bWJlcnMsIHN5bWJvbHMsIGRpYWxwYWQsIHZvaWNlXG4jIGtleWJvYXJkVGhlbWU6IGxpZ2h0LCBkYXJrXG4jIGhhc0F1dG9Db3JyZWN0OiB0cnVlIG9yIGZhbHNlXG4jXG4jIElmIHlvdSBjaGFuZ2UgdGhlIGRpcmVjdG9yeSBvZiB0aGUgaW1hZ2VzLCB1cGRhdGUgZGlyIGJlbG93IHdpdGggdGhlIGNvcnJlY3QgZmlsZSBwYXRoXG5cbmV4cG9ydHMua2V5Ym9hcmQgPSAoa2V5Ym9hcmRUeXBlLCBrZXlib2FyZFRoZW1lLCBoYXNBdXRvQ29ycmVjdCkgLT5cblxuXHQjIyBEZWZpbmUgdGhlIGRpcmVjdG9yeSB0aGUgaW1hZ2VzIGxpdmUgaW4gYW5kIHRoZSBpbWFnZSBmb3JtYXRcblx0ZGlyID0gXCJtb2R1bGVzL2tleWJvYXJkcy9cIlxuXHRpbWdGb3JtYXQgPSBcIi5wbmdcIlxuXG5cdCMjIElkZW50aWZ5IGtleWJvYXJkIHR5cGVcblx0aWYga2V5Ym9hcmRUeXBlID09IFwiZGVmYXVsdFwiIHRoZW4gdHlwZSA9IFwia2V5Ym9hcmRcIiBlbHNlIHR5cGUgPSBcImtleWJvYXJkXCJcblx0aWYga2V5Ym9hcmRUeXBlID09IFwibnVtYmVyc1wiIHRoZW4gdHlwZSA9IFwibnVtYmVyc1wiXG5cdGlmIGtleWJvYXJkVHlwZSA9PSBcInN5bWJvbHNcIiB0aGVuIHR5cGUgPSBcInN5bWJvbHNcIlxuXHRpZiBrZXlib2FyZFR5cGUgPT0gXCJkaWFscGFkXCIgdGhlbiB0eXBlID0gXCJkaWFscGFkXCJcblx0aWYga2V5Ym9hcmRUeXBlID09IFwidm9pY2VcIiB0aGVuIHR5cGUgPSBcInZvaWNlXCJcblxuXHQjIyBJZGVudGlmeSBrZXlib2FyZCB0aGVtZVxuXHRpZiBrZXlib2FyZFRoZW1lID09IFwibGlnaHRcIiB0aGVuIHRoZW1lID0gXCJMaWdodFwiIGVsc2UgdGhlbWUgPSBcIkxpZ2h0XCJcblx0aWYga2V5Ym9hcmRUaGVtZSA9PSBcImRhcmtcIiB0aGVuIHRoZW1lID0gXCJEYXJrXCJcblxuXHQjIyBJZGVudGlmeSBpZiBBdXRvQ29ycmVjdCBpcyBuZWVkZWRcblx0aWYgaGFzQXV0b0NvcnJlY3QgPT0gdHJ1ZSB0aGVuIGFjID0gXCJBQ1wiIGVsc2UgYWMgPSBcIlwiXG5cdGlmIHR5cGUgPT0gXCJkaWFscGFkXCIgdGhlbiBhYyA9IFwiXCJcblx0aWYgYWMgPT0gXCJBQ1wiIHRoZW4ga2V5Ym9hcmRIZWlnaHQgPSA3OTAgZWxzZSBrZXlib2FyZEhlaWdodCA9IDY3MFxuXG5cdCMjIGNvbnN0cnVjdGluZyB0aGUgZmlsZW5hbWVcblx0ZmlsZW5hbWUgPSBkaXIgKyB0eXBlICsgdGhlbWUgKyBhYyArIGltZ0Zvcm1hdFxuXG5cdCMjIElmIHZvaWNlIGtleWJvYXJkLCBvdmVyd3JpdGUgYWxsIG9mIHRoZSBhYm92ZVxuXHRpZiB0eXBlID09IFwidm9pY2VcIiB0aGVuIGZpbGVuYW1lID0gZGlyICsgXCJ2b2ljZVwiICsgaW1nRm9ybWF0XG5cblx0IyMgY3JlYXRpbmcgdGhlIGtleWJvYXJkIGxheWVyc1xuXHRrZXlib2FyZCA9IG5ldyBMYXllclxuXHRcdG5hbWU6IHR5cGUgKyB0aGVtZSArIGFjXG5cdFx0eDogMCwgbWF4WTogU2NyZWVuLmhlaWdodCArIGtleWJvYXJkSGVpZ2h0XG5cdFx0d2lkdGg6IFNjcmVlbi53aWR0aCwgaGVpZ2h0OiBrZXlib2FyZEhlaWdodFxuXHRcdGltYWdlOiBmaWxlbmFtZVxuXHRcdHNoYWRvd0JsdXI6IDYsIHNoYWRvd0NvbG9yOiBcInJnYmEoMCwwLDAsMC4yNClcIlxuXHRrZXlib2FyZC5zdGF0ZXMuYWRkXG5cdFx0ZG93bjogbWF4WTogU2NyZWVuLmhlaWdodCArIGtleWJvYXJkSGVpZ2h0XG5cdFx0dXA6IG1heFk6IFNjcmVlbi5oZWlnaHRcblx0a2V5Ym9hcmQuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPSB0aW1lOiAwLjNcblxuXHRkb25lQlROID0gbmV3IExheWVyXG5cdFx0bmFtZTogXCJkb25lQlROXCJcblx0XHRzdXBlckxheWVyOiBrZXlib2FyZFxuXHRcdHg6IFNjcmVlbi53aWR0aCAtIDE2MCwgeTogNjIwXG5cdFx0d2lkdGg6IDE1NiwgaGVpZ2h0OiAxNTBcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuXHRpZiBrZXlib2FyZFR5cGUgPT0gXCJ2b2ljZVwiIHRoZW4gZG9uZUJUTi55ID0gMFxuXG5cdCMjIERlZmluaW5nIHRoZSBsYXllciBhbmltYXRpb25zIG9uIGxvYWRcblx0a2V5Ym9hcmQuc3RhdGVzLnN3aXRjaChcInVwXCIpXG5cdGRvbmVCVE4ub24gRXZlbnRzLkNsaWNrLCAtPlxuXHRcdGtleWJvYXJkLnN0YXRlcy5zd2l0Y2goXCJkb3duXCIpXG5cdFx0VXRpbHMuZGVsYXkgMSwgLT5cblx0XHRcdGtleWJvYXJkLmRlc3Ryb3koKVxuIl19
