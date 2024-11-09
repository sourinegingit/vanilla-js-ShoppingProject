import "./src/index.css";
import "./node_modules/flowbite/dist/flowbite.js";
import { App } from "./src/App";
import { router } from "./src/routes/router.js";

const root = document.getElementById("app");
root.appendChild(App());
router.resolve();