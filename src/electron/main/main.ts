import fs from "fs";
import { join } from "path";
import { app, BrowserWindow, ipcMain } from "electron";
// import "../preload/preload";
import Test from "../../model/test";

const isDev = process.env.npm_lifecycle_event === "app:dev" ? true : false;

function createWindow() {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: join(__dirname, "../preload/preload.js"),
			nodeIntegration: false,
			contextIsolation: true,
		},
	});

	// and load the index.html of the app.
	mainWindow.loadURL(
		isDev ? "http://localhost:3000" : join(__dirname, "../../index.html")
	);
	// Open the DevTools.
	if (isDev) {
		mainWindow.webContents.openDevTools();
	}
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();
	app.on("activate", function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
const t = new Test();
ipcMain.on("test", (event, data) => {
	console.log(data);
	console.log(12);
	setTimeout(() => {
		t.printI();
	}, 5000);
});
ipcMain.on("test2", (event, data) => console.log(3000));

// setTimeout(() => {
// 	console.log(12);
// 	t.printI();
// }, 5000);
