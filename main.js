const {app, BrowserWindow, ipcMain, Tray} = require('electron')
const path = require('path')

const assetsDirectory = path.join(__dirname, 'assets')

let tray = undefined
let window = undefined

process.env.GOOGLE_API_KEY = "AIzaSyAjQz5Scgjt8A-n_PKQWjNiYg-ht2gUJts"

var menubar = require('menubar')
var mb = menubar()

mb.on('ready', function ready () {
  console.log('app is ready')
  // your app code here
})
