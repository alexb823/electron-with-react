const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

//handle setup events as quickly as possible
const setupEvents = require('./setupEvents');
if (setupEvents.handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: Math.round(width * 0.7),
    height: Math.round(height * 0.7),
    webPreferences: {
      enableRemoteModule: false,
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000/'
      : `file://${path.join(__dirname, '/react-app/build/index.html')}`
  );
  // win.webContents.openDevTools() //Show Chromium Developer Tools
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
