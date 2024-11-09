import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";

export const router = new Navigo("/");

const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};


  router
    .on("/", () => {
      changeContents(starter);
    }) .on("/welcome", () => {
      changeContents(welcome);
    })
   

    // router.resolve();

