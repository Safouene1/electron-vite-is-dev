npm: electron-vite-is-dev

    Author: Safouen Turki

## Introduction
Check if the Electron-Vite Application is running in Development.

## Problem
Electron-Vite does not offer support for "noteIntegration."
Consequently, when launching in the development environment, utilizing the node process or relying on default Electron options like {isDev} or {isApp} during the rerender process may result in errors

## How to use
#####  Install
       npm i electron-vite-is-dev

or

     yarn add electron-is-packaged

##### Usage
    // Import
    import  isDev  from 'electron-vite-is-dev';

    // Import ES5 way
    const isDev = require('electron-vite-is-dev').isDev;

// Output: boolean

Building from Source

Requirements: Node.js v6+, Git and npm


## Contribute

    Fork the repo and create your branch from master.
    Ensure that the changes pass linting.
    Update the documentation if needed.
    Make sure your code lints.
    Issue a pull request!




electron-vite-is-dev | Get the Electron-Vite Application  Dev status is released under Apache 2.0 License.

Copyright © 2024-Present Safouen Turki
