require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"androidKeyboard":[function(require,module,exports){
exports.Keyboard = function(keyboardType, keyboardTheme, hasAutoCorrect) {
  var ac, dir, filename, imgFormat, keyboard, keyboardHeight, theme, type;
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
  window["doneBTN"] = new Layer({
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWFyb25qYW1lcy9Ecm9wYm94L0ZyYW1lci9TaW1wbGUtQW5kcm9pZC1LZXlib2FyZHMvYW5kcm9pZEtleWJvYXJkLVNhbXBsZS1Qcm9qZWN0LmZyYW1lci9tb2R1bGVzL2FuZHJvaWRLZXlib2FyZC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNlQSxPQUFPLENBQUMsUUFBUixHQUFtQixTQUFDLFlBQUQsRUFBZSxhQUFmLEVBQThCLGNBQTlCO0FBR2xCLE1BQUE7RUFBQSxHQUFBLEdBQU07RUFDTixTQUFBLEdBQVk7RUFHWixJQUFHLFlBQUEsS0FBZ0IsU0FBbkI7SUFBa0MsSUFBQSxHQUFPLFdBQXpDO0dBQUEsTUFBQTtJQUF5RCxJQUFBLEdBQU8sV0FBaEU7O0VBQ0EsSUFBRyxZQUFBLEtBQWdCLFNBQW5CO0lBQWtDLElBQUEsR0FBTyxVQUF6Qzs7RUFDQSxJQUFHLFlBQUEsS0FBZ0IsU0FBbkI7SUFBa0MsSUFBQSxHQUFPLFVBQXpDOztFQUNBLElBQUcsWUFBQSxLQUFnQixTQUFuQjtJQUFrQyxJQUFBLEdBQU8sVUFBekM7O0VBQ0EsSUFBRyxZQUFBLEtBQWdCLE9BQW5CO0lBQWdDLElBQUEsR0FBTyxRQUF2Qzs7RUFHQSxJQUFHLGFBQUEsS0FBaUIsT0FBcEI7SUFBaUMsS0FBQSxHQUFRLFFBQXpDO0dBQUEsTUFBQTtJQUFzRCxLQUFBLEdBQVEsUUFBOUQ7O0VBQ0EsSUFBRyxhQUFBLEtBQWlCLE1BQXBCO0lBQWdDLEtBQUEsR0FBUSxPQUF4Qzs7RUFHQSxJQUFHLGNBQUEsS0FBa0IsSUFBckI7SUFBK0IsRUFBQSxHQUFLLEtBQXBDO0dBQUEsTUFBQTtJQUE4QyxFQUFBLEdBQUssR0FBbkQ7O0VBQ0EsSUFBRyxJQUFBLEtBQVEsU0FBWDtJQUEwQixFQUFBLEdBQUssR0FBL0I7O0VBQ0EsSUFBRyxFQUFBLEtBQU0sSUFBVDtJQUFtQixjQUFBLEdBQWlCLElBQXBDO0dBQUEsTUFBQTtJQUE2QyxjQUFBLEdBQWlCLElBQTlEOztFQUdBLFFBQUEsR0FBVyxHQUFBLEdBQU0sSUFBTixHQUFhLEtBQWIsR0FBcUIsRUFBckIsR0FBMEI7RUFHckMsSUFBRyxJQUFBLEtBQVEsT0FBWDtJQUF3QixRQUFBLEdBQVcsR0FBQSxHQUFNLE9BQU4sR0FBZ0IsVUFBbkQ7O0VBR0EsUUFBQSxHQUFlLElBQUEsS0FBQSxDQUNkO0lBQUEsSUFBQSxFQUFNLElBQUEsR0FBTyxLQUFQLEdBQWUsRUFBckI7SUFDQSxDQUFBLEVBQUcsQ0FESDtJQUNNLElBQUEsRUFBTSxNQUFNLENBQUMsTUFBUCxHQUFnQixjQUQ1QjtJQUVBLEtBQUEsRUFBTyxNQUFNLENBQUMsS0FGZDtJQUVxQixNQUFBLEVBQVEsY0FGN0I7SUFHQSxLQUFBLEVBQU8sUUFIUDtJQUlBLFVBQUEsRUFBWSxDQUpaO0lBSWUsV0FBQSxFQUFhLGtCQUo1QjtHQURjO0VBTWYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFoQixDQUNDO0lBQUEsSUFBQSxFQUFNO01BQUEsSUFBQSxFQUFNLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLGNBQXRCO0tBQU47SUFDQSxFQUFBLEVBQUk7TUFBQSxJQUFBLEVBQU0sTUFBTSxDQUFDLE1BQWI7S0FESjtHQUREO0VBR0EsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBaEIsR0FBbUM7SUFBQSxJQUFBLEVBQU0sR0FBTjs7RUFFbkMsTUFBTyxDQUFBLFNBQUEsQ0FBUCxHQUF3QixJQUFBLEtBQUEsQ0FDdkI7SUFBQSxJQUFBLEVBQU0sU0FBTjtJQUNBLFVBQUEsRUFBWSxRQURaO0lBRUEsQ0FBQSxFQUFHLE1BQU0sQ0FBQyxLQUFQLEdBQWUsR0FGbEI7SUFFdUIsQ0FBQSxFQUFHLEdBRjFCO0lBR0EsS0FBQSxFQUFPLEdBSFA7SUFHWSxNQUFBLEVBQVEsR0FIcEI7SUFJQSxlQUFBLEVBQWlCLElBSmpCO0dBRHVCO0VBT3hCLElBQUcsWUFBQSxLQUFnQixPQUFuQjtJQUFnQyxPQUFPLENBQUMsQ0FBUixHQUFZLEVBQTVDOztFQUdBLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBRCxDQUFmLENBQXVCLElBQXZCO1NBQ0EsT0FBTyxDQUFDLEVBQVIsQ0FBVyxNQUFNLENBQUMsS0FBbEIsRUFBeUIsU0FBQTtJQUN4QixRQUFRLENBQUMsTUFBTSxDQUFDLFFBQUQsQ0FBZixDQUF1QixNQUF2QjtXQUNBLEtBQUssQ0FBQyxLQUFOLENBQVksQ0FBWixFQUFlLFNBQUE7YUFDZCxRQUFRLENBQUMsT0FBVCxDQUFBO0lBRGMsQ0FBZjtFQUZ3QixDQUF6QjtBQW5Ea0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyBNb2R1bGUgY3JlYXRlZCBieSBBYXJvbiBKYW1lcyB8IEFwcmlsIDE2dGgsIDIwMTZcbiNcbiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSBhdCB0aGUgdG9wIG9mIHlvdXIgcHJvamVjdCB0byBhY2Nlc3MgdGhpcyBtb2R1bGU6XG4jIGFuZHJvaWQgPSByZXF1aXJlIFwiYW5kcm9pZEtleWJvYXJkXCJcbiNcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSB1c2luZyB0aGlzIGZ1bmN0aW9uOlxuIyBhbmRyb2lkLmtleWJvYXJkKFwiZGVmYXVsdFwiLCBcImxpZ2h0XCIsIHRydWUpXG4jXG4jIEF2YWlsYWJsZSBvcHRpb25zOlxuIyBrZXlib2FyZFR5cGVzOiBkZWZhdWx0LCBudW1iZXJzLCBzeW1ib2xzLCBkaWFscGFkLCB2b2ljZVxuIyBrZXlib2FyZFRoZW1lOiBsaWdodCwgZGFya1xuIyBoYXNBdXRvQ29ycmVjdDogdHJ1ZSBvciBmYWxzZVxuI1xuIyBJZiB5b3UgY2hhbmdlIHRoZSBkaXJlY3Rvcnkgb2YgdGhlIGltYWdlcywgdXBkYXRlIGRpciBiZWxvdyB3aXRoIHRoZSBjb3JyZWN0IGZpbGUgcGF0aFxuXG5leHBvcnRzLktleWJvYXJkID0gKGtleWJvYXJkVHlwZSwga2V5Ym9hcmRUaGVtZSwgaGFzQXV0b0NvcnJlY3QpIC0+XG5cblx0IyMgRGVmaW5lIHRoZSBkaXJlY3RvcnkgdGhlIGltYWdlcyBsaXZlIGluIGFuZCB0aGUgaW1hZ2UgZm9ybWF0XG5cdGRpciA9IFwibW9kdWxlcy9rZXlib2FyZHMvXCJcblx0aW1nRm9ybWF0ID0gXCIucG5nXCJcblxuXHQjIyBJZGVudGlmeSBrZXlib2FyZCB0eXBlXG5cdGlmIGtleWJvYXJkVHlwZSA9PSBcImRlZmF1bHRcIiB0aGVuIHR5cGUgPSBcImtleWJvYXJkXCIgZWxzZSB0eXBlID0gXCJrZXlib2FyZFwiXG5cdGlmIGtleWJvYXJkVHlwZSA9PSBcIm51bWJlcnNcIiB0aGVuIHR5cGUgPSBcIm51bWJlcnNcIlxuXHRpZiBrZXlib2FyZFR5cGUgPT0gXCJzeW1ib2xzXCIgdGhlbiB0eXBlID0gXCJzeW1ib2xzXCJcblx0aWYga2V5Ym9hcmRUeXBlID09IFwiZGlhbHBhZFwiIHRoZW4gdHlwZSA9IFwiZGlhbHBhZFwiXG5cdGlmIGtleWJvYXJkVHlwZSA9PSBcInZvaWNlXCIgdGhlbiB0eXBlID0gXCJ2b2ljZVwiXG5cblx0IyMgSWRlbnRpZnkga2V5Ym9hcmQgdGhlbWVcblx0aWYga2V5Ym9hcmRUaGVtZSA9PSBcImxpZ2h0XCIgdGhlbiB0aGVtZSA9IFwiTGlnaHRcIiBlbHNlIHRoZW1lID0gXCJMaWdodFwiXG5cdGlmIGtleWJvYXJkVGhlbWUgPT0gXCJkYXJrXCIgdGhlbiB0aGVtZSA9IFwiRGFya1wiXG5cblx0IyMgSWRlbnRpZnkgaWYgQXV0b0NvcnJlY3QgaXMgbmVlZGVkXG5cdGlmIGhhc0F1dG9Db3JyZWN0ID09IHRydWUgdGhlbiBhYyA9IFwiQUNcIiBlbHNlIGFjID0gXCJcIlxuXHRpZiB0eXBlID09IFwiZGlhbHBhZFwiIHRoZW4gYWMgPSBcIlwiXG5cdGlmIGFjID09IFwiQUNcIiB0aGVuIGtleWJvYXJkSGVpZ2h0ID0gNzkwIGVsc2Uga2V5Ym9hcmRIZWlnaHQgPSA2NzBcblxuXHQjIyBjb25zdHJ1Y3RpbmcgdGhlIGZpbGVuYW1lXG5cdGZpbGVuYW1lID0gZGlyICsgdHlwZSArIHRoZW1lICsgYWMgKyBpbWdGb3JtYXRcblxuXHQjIyBJZiB2b2ljZSBrZXlib2FyZCwgb3ZlcndyaXRlIGFsbCBvZiB0aGUgYWJvdmVcblx0aWYgdHlwZSA9PSBcInZvaWNlXCIgdGhlbiBmaWxlbmFtZSA9IGRpciArIFwidm9pY2VcIiArIGltZ0Zvcm1hdFxuXG5cdCMjIGNyZWF0aW5nIHRoZSBrZXlib2FyZCBsYXllcnNcblx0a2V5Ym9hcmQgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOiB0eXBlICsgdGhlbWUgKyBhY1xuXHRcdHg6IDAsIG1heFk6IFNjcmVlbi5oZWlnaHQgKyBrZXlib2FyZEhlaWdodFxuXHRcdHdpZHRoOiBTY3JlZW4ud2lkdGgsIGhlaWdodDoga2V5Ym9hcmRIZWlnaHRcblx0XHRpbWFnZTogZmlsZW5hbWVcblx0XHRzaGFkb3dCbHVyOiA2LCBzaGFkb3dDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMjQpXCJcblx0a2V5Ym9hcmQuc3RhdGVzLmFkZFxuXHRcdGRvd246IG1heFk6IFNjcmVlbi5oZWlnaHQgKyBrZXlib2FyZEhlaWdodFxuXHRcdHVwOiBtYXhZOiBTY3JlZW4uaGVpZ2h0XG5cdGtleWJvYXJkLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID0gdGltZTogMC4zXG5cblx0d2luZG93W1wiZG9uZUJUTlwiXSA9IG5ldyBMYXllclxuXHRcdG5hbWU6IFwiZG9uZUJUTlwiXG5cdFx0c3VwZXJMYXllcjoga2V5Ym9hcmRcblx0XHR4OiBTY3JlZW4ud2lkdGggLSAxNjAsIHk6IDYyMFxuXHRcdHdpZHRoOiAxNTYsIGhlaWdodDogMTUwXG5cdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cblx0aWYga2V5Ym9hcmRUeXBlID09IFwidm9pY2VcIiB0aGVuIGRvbmVCVE4ueSA9IDBcblxuXHQjIyBEZWZpbmluZyB0aGUgbGF5ZXIgYW5pbWF0aW9ucyBvbiBsb2FkXG5cdGtleWJvYXJkLnN0YXRlcy5zd2l0Y2goXCJ1cFwiKVxuXHRkb25lQlROLm9uIEV2ZW50cy5DbGljaywgLT5cblx0XHRrZXlib2FyZC5zdGF0ZXMuc3dpdGNoKFwiZG93blwiKVxuXHRcdFV0aWxzLmRlbGF5IDEsIC0+XG5cdFx0XHRrZXlib2FyZC5kZXN0cm95KClcbiJdfQ==
