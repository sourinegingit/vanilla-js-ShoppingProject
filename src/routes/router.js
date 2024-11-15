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
import wishList from "../pages/wishList/wishList";

export const router = new Navigo("/");

const changePage = (target) => {
  const root = document.getElementById("rootsElement");
  root.innerHTML = "";
  root.append(target());
};

const changePage2 = (target, item) => {
  // console.log(item);
  target(item).then((res) => {
    const root = document.getElementById("rootsElement");
    root.innerHTML = "";
    // console.log(res);
    root.append(res);
  });
};
router
  .on("/", () => {
    changePage(starter);
  })
  .on("/welcome", () => {
    changePage(welcome);
  })
  .on("/swiper1", () => {
    changePage(swiper1);
  })
  .on("/swiper2", () => {
    changePage(swiper2);
  })
  .on("/swiper3", () => {
    changePage(swiper3);
  })
  .on("/login", () => {
    changePage(login);
  })
  .on("/home", () => {
    changePage(home);
    changePage2(home);
  })
  .on("/adidas", () => {
    changePage2(adidas);
  })
  .on("/asics", () => {
    changePage2(asics);
  })
  .on("/nike", () => {
    changePage2(nike);
  })
  .on("/converse", () => {
    changePage2(converse);
  }) .on("/newbalance", () => {
    changePage2(newbalance);
  }) .on("/puma", () => {
    changePage2(puma);
  }) .on("/reebok", () => {
    changePage2(reebok);
  }) .on("/wishList", () => {
    // changePage(wishList);
    changePage2(wishList);

  })
.on("/productDetail/:id",(item)=>{
  // console.log(item,item.data.id);
  
  changePage2(productDetail,item.data.id)
})
// router.resolve();
