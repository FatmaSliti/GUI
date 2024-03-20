const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);


//Removing the bar will prevent the user to reload the page 


// const { app, BrowserWindow, Menu } = require('electron')

// function createWindow() {
//     const mainWindow = new BrowserWindow({
//         width: 800,
//         height: 600,
//         // Ensure 'frame' is set to true to keep the top bar
//         frame: true,
//         webPreferences: {
//             nodeIntegration: true
//         }
//     })

//     // Load your HTML file or URL here
//     mainWindow.loadFile('index.html')

//     // Define a custom menu template without the menu bar containing "File", "Edit", etc.
//     const menuTemplate = []

//     // Set the application menu to the custom template
//     const menu = Menu.buildFromTemplate(menuTemplate)
//     Menu.setApplicationMenu(menu)
// }

// app.whenReady().then(() => {
//     createWindow()

//     app.on('activate', function () {
//         if (BrowserWindow.getAllWindows().length === 0) createWindow()
//     })
// })

// app.on('window-all-closed', function () {
//     if (process.platform !== 'darwin') app.quit()
// })
