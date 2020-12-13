# Getting Started with Electron and Create React App

**After cloning the repo, `cd` in to the project directory and run `git submodule init` and `git submodule update` to clone the `react-app' submodule.\
Then run npm install and npm run react-install to install all the dependencies for Electron and React**

This project was bootstrapped with [Electron](https://github.com/electron) and [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run react-install`

Installs all the React dependencies without needing to cd in to the react-app folder.

### `npm run start-dev`

Runs the React app in the development mode on [http://localhost:3000](http://localhost:3000).\
Runs Electron app in in the development mode that loaded the Url [http://localhost:3000](http://localhost:3000) in the Electron app window.

### `npm run electron-build-mac`

Builds the React app for production to the `react-app/build` folder.\
Packages the files for Mac and creates `ElectronWithReact.dmg` install file in `out/make` folder.

### `npm run electron-build-win`

Builds the React app for production to the `react-app/build` folder.\
Packages the files for Windows and creates `ElectronWithReact.exe` install file in `out/make/squirrel.windows/x64` folder.\
**You can only build the Squirrel.Windows target on a Windows machine or on a macOS /Linux machine with `mono` and `wine` installed.**

### `npm run make-mac`

Packages the files for Mac and creates `ElectronWithReact.dmg` install file in `out/make` folder.\
Need to already have run `build-react`. Will not work correctly without the `build` inside `react-app`.

### `npm run make-win`

Packages the files for Windows and creates `ElectronWithReact.exe` install file in `out/make/squirrel.windows/x64` folder.\
Need to already have run `build-react`. Will not work correctly without the `build` inside `react-app`.\
**You can only build the Squirrel.Windows target on a Windows machine or on a macOS /Linux machine with `mono` and `wine` installed.**

## Learn More Electron

You can learn more in the [Electron documentation](https://www.electronjs.org/docs).

## Electron Forge

[Electron Forge](https://www.electronforge.io/) is a complete tool for creating, publishing, and installing modern Electron applications.

## Learn More React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
