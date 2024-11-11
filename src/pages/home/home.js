import { El } from "../../el/El";

export const home = () => {
  return El({
    element: "div",
    id: "home",
    className:
      "w-[414px]  h-screen flex flex-col items-center justify-center overflow-y-hidden",
    children: [
      El({
        element: "nav",
        id: "top-nav",
        className:
          "fixed flex w-[414px] h-[80px] top-0 justify-between items-center px-[24px] bg-white z-10",
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
                    children: ["NEGIN SOURI"],
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
                // onclick: () => {
                //   Router().navigate("/wishlist");
                // },
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

      //   -------------search div--------------

      El({
        element: "div",
        id: "search-brand",
        className: "p-[24px] top-[80px] fixed w-[414px] bg-gray-400 z-12",
        children: [
          El({
            element: "div",
            className: "",
            children: [
              El({
                element: "input",
                type: "text",
                placeholder: "Search",
                className:
                  "border-none outline-none h-[37px] bg-gray-200 text-black rounded-full w-[370px] px-8",
                //    onkeyup: () => {
                //     Router().navigate("/search");
                //   },
              }),
              El({
                element: "img",
                className: "absolute top-[35px] left-[30px]",
                src: "../../src/images/icon/search.svg",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mt-[20px]",
            // each brand
            children: [
              El({
                element: "div",
                className: "flex justify-between",
                children: [
                  El({
                    element: "div",
                    className: "flex flex-col justify-center items-center",
                    children: [
                      El({
                        element: "button",
                        className:
                          "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",

                        // onclick: () => {
                        //     Router().navigate("/nike");
                        //   },

                        children: [
                          El({
                            element: "img",
                            className: "",
                            src: "./src/images/brand/nike.png",
                          }),
                        ],
                      }),
                      El({
                        element: "p",
                        className: "font-[600] text-[14px] mt-2",
                        children: ["Nike"],
                      }),
                    ],
                  }),
                  // end nike

                  El({
                    element: "div",
                    className: "flex flex-col items-center justify-center",
                    children: [
                      El({
                        element: "button",
                        // onclick: () => {
                        //     Router().navigate("/nike");
                        //   },
                        className:
                          "w-[60px] h-[60px] bg-gray-200 rounded-full flex justify-center items-center",
                        children: [
                          El({
                            element: "img",
                            src: "../../src/images/brand/adidas.png",
                          }),
                        ],
                      }),

                      El({
                        element: "p",
                        className: "font-[600] text-[14px] mt-2",
                        children: ["Adidas"],
                      }),
                    ],
                  }),

                  El({
                    element: "div",
                    className: "flex flex-col justify-center items-center",
                    children: [
                      El({
                        element: "button",
                        onclick: () => {
                          Router().navigate("/puma");
                        },
                        className:
                          "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                        children: [
                          El({
                            element: "img",
                            className: "",
                            src: "../../src/images/brand/puma.png",
                          }),
                        ],
                      }),
                      El({
                        element: "p",
                        className: "font-[600] text-[14px] mt-2",
                        children: ["Puma"],
                      }),
                    ],
                  }),

                  El({
                    element: "div",
                    className: "flex flex-col justify-center items-center",
                    children: [
                      El({
                        element: "button",
                        onclick: () => {
                          Router().navigate("/asics");
                        },
                        className:
                          "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                        children: [
                          El({
                            element: "img",
                            className: "",
                            src: ".../../src/images/brand/asics.png",
                          }),
                        ],
                      }),
                      El({
                        element: "p",
                        className: "font-[600] text-[14px] mt-2",
                        children: ["Asics"],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          //   -----------
        ],
      }),
    ],
  });
};
export default home;
