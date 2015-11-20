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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWFyb25qYW1lcy9Ecm9wYm94L0ZyYW1lci9hbmRyb2lkS2V5Ym9hcmQuZnJhbWVyL21vZHVsZXMvYW5kcm9pZEtleWJvYXJkLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ2VBLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsWUFBRCxFQUFlLGFBQWYsRUFBOEIsY0FBOUI7QUFHbEIsTUFBQTtFQUFBLEdBQUEsR0FBTTtFQUNOLFNBQUEsR0FBWTtFQUdaLElBQUcsWUFBQSxLQUFnQixTQUFuQjtJQUFrQyxJQUFBLEdBQU8sV0FBekM7R0FBQSxNQUFBO0lBQXlELElBQUEsR0FBTyxXQUFoRTs7RUFDQSxJQUFHLFlBQUEsS0FBZ0IsU0FBbkI7SUFBa0MsSUFBQSxHQUFPLFVBQXpDOztFQUNBLElBQUcsWUFBQSxLQUFnQixTQUFuQjtJQUFrQyxJQUFBLEdBQU8sVUFBekM7O0VBQ0EsSUFBRyxZQUFBLEtBQWdCLFNBQW5CO0lBQWtDLElBQUEsR0FBTyxVQUF6Qzs7RUFDQSxJQUFHLFlBQUEsS0FBZ0IsT0FBbkI7SUFBZ0MsSUFBQSxHQUFPLFFBQXZDOztFQUdBLElBQUcsYUFBQSxLQUFpQixPQUFwQjtJQUFpQyxLQUFBLEdBQVEsUUFBekM7R0FBQSxNQUFBO0lBQXNELEtBQUEsR0FBUSxRQUE5RDs7RUFDQSxJQUFHLGFBQUEsS0FBaUIsTUFBcEI7SUFBZ0MsS0FBQSxHQUFRLE9BQXhDOztFQUdBLElBQUcsY0FBQSxLQUFrQixJQUFyQjtJQUErQixFQUFBLEdBQUssS0FBcEM7R0FBQSxNQUFBO0lBQThDLEVBQUEsR0FBSyxHQUFuRDs7RUFDQSxJQUFHLElBQUEsS0FBUSxTQUFYO0lBQTBCLEVBQUEsR0FBSyxHQUEvQjs7RUFDQSxJQUFHLEVBQUEsS0FBTSxJQUFUO0lBQW1CLGNBQUEsR0FBaUIsSUFBcEM7R0FBQSxNQUFBO0lBQTZDLGNBQUEsR0FBaUIsSUFBOUQ7O0VBR0EsUUFBQSxHQUFXLEdBQUEsR0FBTSxJQUFOLEdBQWEsS0FBYixHQUFxQixFQUFyQixHQUEwQjtFQUdyQyxJQUFHLElBQUEsS0FBUSxPQUFYO0lBQXdCLFFBQUEsR0FBVyxHQUFBLEdBQU0sT0FBTixHQUFnQixVQUFuRDs7RUFHQSxRQUFBLEdBQWUsSUFBQSxLQUFBLENBQ2Q7SUFBQSxJQUFBLEVBQU0sSUFBQSxHQUFPLEtBQVAsR0FBZSxFQUFyQjtJQUNBLENBQUEsRUFBRyxDQURIO0lBQ00sSUFBQSxFQUFNLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLGNBRDVCO0lBRUEsS0FBQSxFQUFPLE1BQU0sQ0FBQyxLQUZkO0lBRXFCLE1BQUEsRUFBUSxjQUY3QjtJQUdBLEtBQUEsRUFBTyxRQUhQO0lBSUEsVUFBQSxFQUFZLENBSlo7SUFJZSxXQUFBLEVBQWEsa0JBSjVCO0dBRGM7RUFNZixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQWhCLENBQ0M7SUFBQSxJQUFBLEVBQU07TUFBQSxJQUFBLEVBQU0sTUFBTSxDQUFDLE1BQVAsR0FBZ0IsY0FBdEI7S0FBTjtJQUNBLEVBQUEsRUFBSTtNQUFBLElBQUEsRUFBTSxNQUFNLENBQUMsTUFBYjtLQURKO0dBREQ7RUFHQSxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFoQixHQUFtQztJQUFBLElBQUEsRUFBTSxHQUFOOztFQUVuQyxPQUFBLEdBQWMsSUFBQSxLQUFBLENBQ2I7SUFBQSxJQUFBLEVBQU0sU0FBTjtJQUNBLFVBQUEsRUFBWSxRQURaO0lBRUEsQ0FBQSxFQUFHLE1BQU0sQ0FBQyxLQUFQLEdBQWUsR0FGbEI7SUFFdUIsQ0FBQSxFQUFHLEdBRjFCO0lBR0EsS0FBQSxFQUFPLEdBSFA7SUFHWSxNQUFBLEVBQVEsR0FIcEI7SUFJQSxlQUFBLEVBQWlCLElBSmpCO0dBRGE7RUFPZCxJQUFHLFlBQUEsS0FBZ0IsT0FBbkI7SUFBZ0MsT0FBTyxDQUFDLENBQVIsR0FBWSxFQUE1Qzs7RUFHQSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQUQsQ0FBZixDQUF1QixJQUF2QjtTQUNBLE9BQU8sQ0FBQyxFQUFSLENBQVcsTUFBTSxDQUFDLEtBQWxCLEVBQXlCLFNBQUE7SUFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFELENBQWYsQ0FBdUIsTUFBdkI7V0FDQSxLQUFLLENBQUMsS0FBTixDQUFZLENBQVosRUFBZSxTQUFBO2FBQ2QsUUFBUSxDQUFDLE9BQVQsQ0FBQTtJQURjLENBQWY7RUFGd0IsQ0FBekI7QUFuRGtCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgTW9kdWxlIGNyZWF0ZWQgYnkgQWFyb24gSmFtZXMgfCBOb3ZlbWJlciAxOXRoLCAyMDE1XG4jXG4jIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgYXQgdGhlIHRvcCBvZiB5b3VyIHByb2plY3QgdG8gYWNjZXNzIHRoaXMgbW9kdWxlOlxuIyBhbmRyb2lkID0gcmVxdWlyZSBcImFuZHJvaWRLZXlib2FyZFwiXG4jXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgdXNpbmcgdGhpcyBmdW5jdGlvbjpcbiMgYW5kcm9pZC5rZXlib2FyZChcImRlZmF1bHRcIiwgXCJsaWdodFwiLCB0cnVlKVxuI1xuIyBBdmFpbGFibGUgb3B0aW9uczpcbiMga2V5Ym9hcmRUeXBlczogZGVmYXVsdCwgbnVtYmVycywgc3ltYm9scywgZGlhbHBhZCwgdm9pY2VcbiMga2V5Ym9hcmRUaGVtZTogbGlnaHQsIGRhcmtcbiMgaGFzQXV0b0NvcnJlY3Q6IHRydWUgb3IgZmFsc2VcbiNcbiMgSWYgeW91IGNoYW5nZSB0aGUgZGlyZWN0b3J5IG9mIHRoZSBpbWFnZXMsIHVwZGF0ZSBkaXIgYmVsb3cgd2l0aCB0aGUgY29ycmVjdCBmaWxlIHBhdGhcblxuZXhwb3J0cy5rZXlib2FyZCA9IChrZXlib2FyZFR5cGUsIGtleWJvYXJkVGhlbWUsIGhhc0F1dG9Db3JyZWN0KSAtPlxuXG5cdCMjIERlZmluZSB0aGUgZGlyZWN0b3J5IHRoZSBpbWFnZXMgbGl2ZSBpbiBhbmQgdGhlIGltYWdlIGZvcm1hdFxuXHRkaXIgPSBcIm1vZHVsZXMva2V5Ym9hcmRzL1wiXG5cdGltZ0Zvcm1hdCA9IFwiLnBuZ1wiXG5cblx0IyMgSWRlbnRpZnkga2V5Ym9hcmQgdHlwZVxuXHRpZiBrZXlib2FyZFR5cGUgPT0gXCJkZWZhdWx0XCIgdGhlbiB0eXBlID0gXCJrZXlib2FyZFwiIGVsc2UgdHlwZSA9IFwia2V5Ym9hcmRcIlxuXHRpZiBrZXlib2FyZFR5cGUgPT0gXCJudW1iZXJzXCIgdGhlbiB0eXBlID0gXCJudW1iZXJzXCJcblx0aWYga2V5Ym9hcmRUeXBlID09IFwic3ltYm9sc1wiIHRoZW4gdHlwZSA9IFwic3ltYm9sc1wiXG5cdGlmIGtleWJvYXJkVHlwZSA9PSBcImRpYWxwYWRcIiB0aGVuIHR5cGUgPSBcImRpYWxwYWRcIlxuXHRpZiBrZXlib2FyZFR5cGUgPT0gXCJ2b2ljZVwiIHRoZW4gdHlwZSA9IFwidm9pY2VcIlxuXG5cdCMjIElkZW50aWZ5IGtleWJvYXJkIHRoZW1lXG5cdGlmIGtleWJvYXJkVGhlbWUgPT0gXCJsaWdodFwiIHRoZW4gdGhlbWUgPSBcIkxpZ2h0XCIgZWxzZSB0aGVtZSA9IFwiTGlnaHRcIlxuXHRpZiBrZXlib2FyZFRoZW1lID09IFwiZGFya1wiIHRoZW4gdGhlbWUgPSBcIkRhcmtcIlxuXG5cdCMjIElkZW50aWZ5IGlmIEF1dG9Db3JyZWN0IGlzIG5lZWRlZFxuXHRpZiBoYXNBdXRvQ29ycmVjdCA9PSB0cnVlIHRoZW4gYWMgPSBcIkFDXCIgZWxzZSBhYyA9IFwiXCJcblx0aWYgdHlwZSA9PSBcImRpYWxwYWRcIiB0aGVuIGFjID0gXCJcIlxuXHRpZiBhYyA9PSBcIkFDXCIgdGhlbiBrZXlib2FyZEhlaWdodCA9IDc5MCBlbHNlIGtleWJvYXJkSGVpZ2h0ID0gNjcwXG5cblx0IyMgY29uc3RydWN0aW5nIHRoZSBmaWxlbmFtZVxuXHRmaWxlbmFtZSA9IGRpciArIHR5cGUgKyB0aGVtZSArIGFjICsgaW1nRm9ybWF0XG5cblx0IyMgSWYgdm9pY2Uga2V5Ym9hcmQsIG92ZXJ3cml0ZSBhbGwgb2YgdGhlIGFib3ZlXG5cdGlmIHR5cGUgPT0gXCJ2b2ljZVwiIHRoZW4gZmlsZW5hbWUgPSBkaXIgKyBcInZvaWNlXCIgKyBpbWdGb3JtYXRcblxuXHQjIyBjcmVhdGluZyB0aGUga2V5Ym9hcmQgbGF5ZXJzXG5cdGtleWJvYXJkID0gbmV3IExheWVyXG5cdFx0bmFtZTogdHlwZSArIHRoZW1lICsgYWNcblx0XHR4OiAwLCBtYXhZOiBTY3JlZW4uaGVpZ2h0ICsga2V5Ym9hcmRIZWlnaHRcblx0XHR3aWR0aDogU2NyZWVuLndpZHRoLCBoZWlnaHQ6IGtleWJvYXJkSGVpZ2h0XG5cdFx0aW1hZ2U6IGZpbGVuYW1lXG5cdFx0c2hhZG93Qmx1cjogNiwgc2hhZG93Q29sb3I6IFwicmdiYSgwLDAsMCwwLjI0KVwiXG5cdGtleWJvYXJkLnN0YXRlcy5hZGRcblx0XHRkb3duOiBtYXhZOiBTY3JlZW4uaGVpZ2h0ICsga2V5Ym9hcmRIZWlnaHRcblx0XHR1cDogbWF4WTogU2NyZWVuLmhlaWdodFxuXHRrZXlib2FyZC5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9IHRpbWU6IDAuM1xuXG5cdGRvbmVCVE4gPSBuZXcgTGF5ZXJcblx0XHRuYW1lOiBcImRvbmVCVE5cIlxuXHRcdHN1cGVyTGF5ZXI6IGtleWJvYXJkXG5cdFx0eDogU2NyZWVuLndpZHRoIC0gMTYwLCB5OiA2MjBcblx0XHR3aWR0aDogMTU2LCBoZWlnaHQ6IDE1MFxuXHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXG5cdGlmIGtleWJvYXJkVHlwZSA9PSBcInZvaWNlXCIgdGhlbiBkb25lQlROLnkgPSAwXG5cblx0IyMgRGVmaW5pbmcgdGhlIGxheWVyIGFuaW1hdGlvbnMgb24gbG9hZFxuXHRrZXlib2FyZC5zdGF0ZXMuc3dpdGNoKFwidXBcIilcblx0ZG9uZUJUTi5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdFx0a2V5Ym9hcmQuc3RhdGVzLnN3aXRjaChcImRvd25cIilcblx0XHRVdGlscy5kZWxheSAxLCAtPlxuXHRcdFx0a2V5Ym9hcmQuZGVzdHJveSgpXG4iXX0=
