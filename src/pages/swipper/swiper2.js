import { El } from "../../el/El";
import { router } from "../../routes/router";

export const swiper2 = () => {
  setTimeout(() => {
    router.navigate("/swiper2");
  }, 1000);

  return El({
    element: "div",
    id: "swiper1",
    className:
      "w-[415px] h-[700px] overflow-y-hidden flex flex-col items-center",
    children: [
      El({
        element: "img",
        id: "img-swiper1",
        className: "h-[500px] w-full object-cover",
        src: "./src/images/img/3.png",
      }),
      El({
        element: "div",
        id: "text-2",
        className: "flex flex-col items-center justify-center px-4",
        children: [
          El({
            element: "p",
            className:
              "font-[700] text-[32px] text-center mt-[32px]",
            children: ["Your satisfaction is our number one periority"],
          }),
          El({
            element: "img",
            id: "text-1",
            className: "",
            src: "../src/images/assets/swip2.png",
          }),
          El({
            element: "button",
            className: "w-full bg-gray-700 text-white rounded-full p-2 mt-1",
            onclick: () => {
              router.navigate("/swiper2");
            },
            children: ["Next"],
          }),
        ],
      }),
    ],
  });
};

export default swiper2;
