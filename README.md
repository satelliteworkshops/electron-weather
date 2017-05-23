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
npm install electron-connect save-dev
```
```sh
npm install gulp
```

**Step Four**: Begin the process by typing:
```sh
gulp serve
```
