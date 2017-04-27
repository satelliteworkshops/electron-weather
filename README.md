## Summary
This branch dives into how an app renders, makes minor adjustments to become more familiar with the Electron interface, and concludes with a major refactor of the process to show how easy it is to work with NPM.

## Instructions
#### Exercise One (Make it Functional)
```sh
Step One: On line 9 of index.html, add: require('./index')
Step Two: Commit the change, and test your code.
  - Type npm start from your CLI to launch the app.
```
#### Exercise Two (Basic Manipulation)
```sh
Step One: On lines 53 and 54 of main.js, add these two lines of code, then save:
  width: 300,
  height: 450,
Step Two: Run npm start to see the app in progress.
Step Three: While hovering over the app, type CMD + Option + I to open Google Dev Tools.
Step Four: Quit the process and return to main.js.
Step Five: Set line 58, resizable, to true, and save.
Step Six: Relaunch the app to test resizable windows.
Step Seven: Open Dev Tools again (CMD + Option + I) and find the error in the console tab.
Step Eight: Remove line 93 from index.js, which is causing the error in the console dialog, and save.
Step Nine: Terminate and relaunch the app.
Step Ten: Open DevTools again to determine if the console error disappears.
```
#### Exercise Three (Major Refactor)
```sh
Step One: On line 11 of main.js, add the following code chunk:

  var menubar = require('menubar')
  var mb = menubar()

  mb.on('ready', function ready () {
    console.log('app is ready')
    // your app code here
  })

Step Two: Comment out ALL remaining lines (19 - 95) of code on main.js
Step Three: Save. Then try and build the app using npm start.  
Step Four: Notice the Electron error pop-up.
Step Five: Return to package.json, and add a comma to the end of line 20.
Step Six: On line 21, paste the following:
  "menubar": "^5.2.3"
Step Seven: Run npm install, followed by npm start
```

## Next Steps
```sh
Step One: Close any open files in your text editor to avoid conflicts on a branch change
Step Two: Type `git checkout tray-icons`
```
