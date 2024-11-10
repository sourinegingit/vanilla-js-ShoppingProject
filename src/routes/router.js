import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import swiper1 from "../pages/swipper/swiper1";

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
    .on("/swiper1", () => {
      changeContents(swiper1);
    }) 

    // router.resolve();

