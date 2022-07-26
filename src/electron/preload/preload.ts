/* eslint-disable @typescript-eslint/ban-types */
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: any, text: any) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});

{
  // need this to replace ipcRenderer on renderer
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { contextBridge, ipcRenderer } = require("electron");

  // Expose protected methods that allow the renderer process to use
  // the ipcRenderer without exposing the entire object

  contextBridge.exposeInMainWorld("api", {
    send: (channel: string, data: any[]) => {
      ipcRenderer.send(channel, data);
    },
    invoke: async (channel: string, data: any[]) => {
      return ipcRenderer.invoke(channel, data);
    },
    on: (channel: string, func: Function) => {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    once: (channel: string, func: Function) => {
      ipcRenderer.once(channel, (event, args) => func(...args));
    },
  });
}
