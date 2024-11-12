import getProducts from "../../api/getProducts";
import { El } from "../../el/El";

const nike = async () => {
    try {
      const  data  = await getProducts();
  
      return El({
        element: "div",
        id: "adidasPage",
        className: "w-[414px] h-screen flex flex-col overflow-y-hidden",
        children: [
          El({
            element: "div",
            id: "adidasnav",
            className: "p-4 flex items-center justify-between pt-8 px-6",
            children: [
              El({
                element: "div",
                className: "flex items-center gap-3",
                children: [
                  El({
                    element: "button",
                    className: "flex",
                    onclick: () => {
                      history.back();
                    },
                    children: [
                      El({
                        element: "img",
                        className: "text-2xl",
                        src: "./src/images/icon/back.svg",
                      }),
                    ],
                  }),
                  El({
                    element: "h1",
                    className: "text-2xl font-bold",
                    children: "Adidas",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            id: "products-filter1",
            className:
              "p-[24px] absolute w-[414px] top-[80px] flex flex-wrap justify-center gap-4 overflow-y-scroll scrollbar-hidden ",
            children: data
              .filter((item) => item.brand === "nike")
              .map((item) => {
                return El({
                  element: "div",
                  id: `${item.id}`,
                //   onclick: () => {
                //     // productModal({ id: item.id });
                //     // Router().navigate(`/product/${item.id}`);
                //   },
                  className: "",
                  children: [
                    El({
                      element: "div",
                      className:
                        "w-[182px] h-[182px] bg-gray-100 shadow-lg rounded-2xl",
                      children: [
                        El({
                          element: "img",
                          className: "rounded-2xl w-full h-full",
                          src: `${item.images}`,
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "mt-3",
                      children: [
                        El({
                          element: "p",
                          className: "font-[700] text-[20px]",
                          children: [`${item.title}`],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[16px]",
                          children: [`$ ${item.price}`],
                        }),
                      ],
                    }),
                  ],
                });
              }),
          }),
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

export default nike;
