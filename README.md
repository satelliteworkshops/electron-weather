## Summary
This branch sets up refresh functionality when you make changes to the app.

Source: https://github.com/Quramy/electron-connect

## Instructions
#### Exercise One (Work with Gulp)
**Step One**: Create a gulpfile.js in your repository:
```js
'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('serve', function () {

 // Start browser process
 electron.start();

 // Restart browser process
 gulp.watch('app.js', electron.restart);

 // Reload renderer process
 gulp.watch(['index.js', 'index.html'], electron.reload);
});
```
**Step Two**: On line 10 of the index.html, insert the following:
```js
require('electron-connect').client.create()
```

**Step Three**: In your CLI, type:
```sh
npm install electron-connect --save-dev
```
```sh
npm install -g gulp
```

**Step Four**: Begin the process by typing:
```sh
gulp serve
```

### Next Steps
**Choose Your Own Adventure**

We've taught you all about NPM, adding functionality, and packaging. You now know the most fundamental core concepts of Electron, from start to finish.

Let's extend that at your table!

On self-contained branches, go find some of your favorite NPM modules and embed them into your app!

Need Some Starter Ideas?
- Fix the app icons (right now it's a cat because it's missing assignments).
  - HINT: Go back into the earlier branch before we yanked out all of the code and see if you can add the necessary functionality back into your new menubar process.
- Experiment with other native Electron functionality!
  - Make a branch that adds Keyboard shortcuts!
  - Make a branch that creates dialog pop-ups!
  - Super advanced: Make a branch that connects to Bluetooth. Then share, because this would be crazy!   
  - Other ideas: https://github.com/electron/electron-api-demos
- Set up your app to work with outdated node modules! Then try and break your app to use outdated versions and see the results.
