import { El } from "../el/El";
import { router } from "../routes/router";

const profile = () => {
    return El({
      element: "div",
      id: "profile",
      className: "w-screen h-screen flex flex-col overflow-y-hidden",
      children: [
        El({
          element: "nav",
          id: "",
          className:
            "fixed flex w-full h-[80px] top-0 justify-between items-center px-[24px]",
          children: [
            El({
              element: "div",
              className: "flex gap-[16px]",
              children: [
                El({
                  element: "button",
                  id: "",
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[48px] h-[48px] rounded-full",
                      src: "../../src/images/logo/negin.jpg",
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "flex flex-col gap-[4px]",
                  children: [
                    El({
                      element: "p",
                      className: "font-[500] text-[16px] text-[#757475]",
                      children: ["Good Morning👋"],
                    }),
                    El({
                      element: "p",
                      className: "font-[700] text-[16px]",
                      children: ["negin souri"],
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex gap-[16px]",
              children: [
                El({
                  element: "button",
                  id: "notification-btn",
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./src/images/icon/bell.svg",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  id: "like-btn",
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./src/images/icon/like.svg",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        El({
          element: "nav",
          id: "",
          className:
            "fixed flex w-full h-[66px] bottom-0 justify-between px-[48px]",
          children: [
            El({
              element: "button",
              id: "home-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                router.navigate("/home");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/home.png",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Home",
                }),
              ],
            }),
            El({
              element: "button",
              id: "cart-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
               router.navigate("/cart");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/cart.svg",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Cart",
                }),
              ],
            }),
            El({
              element: "button",
              id: "orders-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                router.navigate("/orders");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/orders.svg",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Orders",
                }),
              ],
            }),
            El({
              element: "button",
              id: "Wallet-btn",
              className: " flex flex-col justify-center items-center",
            //   onclick: () => {
            //     router.navigate("/wallet");
            //   },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/wallet.svg",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Wallet",
                }),
              ],
            }),
            El({
              element: "button",
              id: "profile-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
               router.navigate("/profile");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/profile-select.png",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Profile",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
  
  export default profile;
  