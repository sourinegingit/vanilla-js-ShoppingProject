import Navigo from "navigo";
import starter from "../pages/starterOnboarding";

import swiper1 from "../pages/swipper/swiper1";
import swiper2 from "../pages/swipper/swiper2";
import swiper3 from "../pages/swipper/swipper3";
import welcome from "../pages/welcomeOnboarding";
import login from "../pages/login/login";

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
    .on("/swiper2", () => {
      changeContents(swiper2);
    }) .on("/swiper3", () => {
      changeContents(swiper3);
    }) 
    .on("/login", () => {
      changeContents(login);
    }) 

    // router.resolve();

