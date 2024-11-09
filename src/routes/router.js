import Navigo from "navigo";
import starter from "../pages/starter";

export const router = new Navigo("/");

const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};


export const Router = () => {
  router
    .on("/", () => {
      changeContents(starter);
    })
   

  router.resolve();
  return router;
};
