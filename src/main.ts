import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createPinia } from "pinia";

// createApp(App).mount('#app')
createApp(App).use(createPinia()).mount("#app");

// needs this to let renderer process know the window.api types
declare global {
  interface Window {
    api: {
      send: (channel: string, data: any) => void;
      invoke: (channel: string, data: any) => Promise<any>;
      on: (channel: string, func: (...args: any[]) => void) => void;
      once: (channel: string, func: (...args: any[]) => void) => void;
    };
  }
}
