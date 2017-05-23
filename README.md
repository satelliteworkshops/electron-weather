## Summary
This branch covers packaging.

## Instructions
#### Exercise One (Using Electron Packaging)
**Step One**: Anywhere in your command line, type:
```sh
npm install -g electron-packager
```
**Step Two**: Then, from your branch on the CLI:
```sh
electron-packager .
```

**Step Three**: On line 20 of package.json, add a comma:
```js
"electron": "^1.6.8",
```

**Step Four**: On line 21 of package.json, add:
```js
"electron-packager": "^8.7.0"
```

**Step Five**: Commit your changes.

**Step Six**: Switch branches:
```sh
git checkout refreshrebuild
```
