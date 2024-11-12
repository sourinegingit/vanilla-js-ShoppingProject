import Navigo from "navigo";
import starter from "../pages/starterOnboarding";

import swiper1 from "../pages/swipper/swiper1";
import swiper2 from "../pages/swipper/swiper2";
import swiper3 from "../pages/swipper/swipper3";
import welcome from "../pages/welcomeOnboarding";
import login from "../pages/login/login";
import home from "../pages/home/home";
import adidas from "../pages/filter/adidas";
import asics from "../pages/filter/asics";
import nike from "../pages/filter/nike";
import converse from "../pages/filter/converse";
import newbalance from "../pages/filter/newbalance";
import puma from "../pages/filter/puma";
import reebok from "../pages/filter/reebok";
import productDetail from "../pages/productDetail/productDetail";
// import productDetail from "../pages/productDetail/productDetail";

export const router = new Navigo("/");

const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};

const changeContents2 = (target, item) => {
  // console.log(item);
  target(item).then((res) => {
    const root = document.getElementById("rootsEl");
    root.innerHTML = "";
    // console.log(res);
    root.append(res);
  });
};
router
  .on("/", () => {
    changeContents(starter);
  })
  .on("/welcome", () => {
    changeContents(welcome);
  })
  .on("/swiper1", () => {
    changeContents(swiper1);
  })
  .on("/swiper2", () => {
    changeContents(swiper2);
  })
  .on("/swiper3", () => {
    changeContents(swiper3);
  })
  .on("/login", () => {
    changeContents(login);
  })
  .on("/home", () => {
    changeContents(home);
    changeContents2(home);
  })
  .on("/adidas", () => {
    changeContents2(adidas);
  })
  .on("/asics", () => {
    changeContents2(asics);
  })
  .on("/nike", () => {
    changeContents2(nike);
  })
  .on("/converse", () => {
    changeContents2(converse);
  }) .on("/newbalance", () => {
    changeContents2(newbalance);
  }) .on("/puma", () => {
    changeContents2(puma);
  }) .on("/reebok", () => {
    changeContents2(reebok);
  })
.on("/productDetail",()=>{
  changeContents(productDetail)
})
// router.resolve();
