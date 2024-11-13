import getDataUser from "../../api/getDataUser";
import getOneProduct from "../../api/getOneProduct";
import { reduceCounterShoe } from "../../components/card/reduceCounterShoes";
import { increasCounterShoes } from "../../components/card/increasCounterShoes";
import { El } from "../../el/El";



// let selectedcolor = "";
export const productDetail = async (dataid) => {
  try {
    const data = await getOneProduct(dataid);
    console.log("data", data);

    // console.log(data);  //=> {id: 1, title: 'adidas', price: 245, order: 0, size: Array(3), …}

    return El({
      element: "div",
      id: "productDetaildiv",
      className:
        "w-[414px] h-[800px] p-1 absolute flex flex-col bg-white  bg-gray-200 overflow-y-hidden",
      children: [
        El({
          element: "button",
          className:
            "flex items-center justify-start p-1 gap-[8px] border-black",
          onclick: () => {
            history.back();
          },
          children: [
            El({
              element: "img",
              className: "w-6 h-4 mt-[18px]",
              src: "../../src/images/icon/back.svg",
            }),
            El({
              element: "p",
              className: "text-2xl mt-[18px]",
              children: ["back"],
            }),
          ],
        }),
        // image
        El({
          element: "div",
          className: "w-[414px] h-96 overflow-hidden",
          children: [
            El({
              element: "img",
              className: "w-full  h-full object-contain border-b  border-black",
              src: `${data.title}`,
            }),
          ],
        }),

        // description -wishlist
        El({
          element: "div",
          className: "w-[414px] flex flex-col py-6 gap-2",
          children: [
            El({
              element: "div",
              className: "w-[414px] flex justify-between px-6 ",
              children: [
                El({
                  element: "p",
                  className: "text-[32px] font-[700]",
                  children: [`${data.brand}`],
                }),
                El({
                  element: "button",
                  className: "",
                  // wishlist
                  onclick: async () => {
                    const user = await getDataUser(1);
                    console.log(data);

                    if (user) {
                      const userObjclone = { ...user };
                      console.log("userObjclone", userObjclone);
                      userObjclone.whishlist = userObjclone.whishlist || [];
                      userObjclone.whishlist.push(data);
                      localStorage.setItem(
                        "useWishlist",
                        JSON.stringify(userObjclone)
                      );

                      document
                        .getElementById("likebtn-wishlist")
                        .classList.add("hidden");
                    }
                  },

                  children: [
                    El({
                      element: "img",
                      id: "likebtn-wishlist",
                      className: "",
                      src: "../../src/images/icon/like.svg",
                    }),
                  ],
                }),
              ],
            }),

            //  description-star

            El({
              element: "div",
              className: "w-[414px] flex gap-2 px-6 items-center",
              children: [
                El({
                  element: "div",
                  className: "bg-gray-200 p-1 px-2 rounded-md",
                  children: [
                    El({
                      element: "p",
                      className: "",
                      children: ["7.741 sold"],
                    }),
                  ],
                }),
                El({
                  element: "img",
                  className: "w-6",
                  src: "../../src/images/icon/star.svg",
                }),
                El({
                  element: "p",
                  className: "",
                  children: ["4.3 (5,837 rewiews)"],
                }),
              ],
            }),
          ],
        }),

        //   description
        El({
          element: "div",
          className: "w-[414px] px-6 flex flex-col gap-3 py-10",
          children: [
            El({
              element: "p",
              className: "font-[700] text-[18px]",
              children: ["Description"],
            }),
            El({
              element: "p",
              className: "",
              children: [
                "Discover what it's really like to work at the best sports company in the world; this is adidas through the lens of our people.",
                El({
                  element: "span",
                  className: "font-[700]",
                  children: ["view more.."],
                }),
              ],
            }),

            //   size
            El({
              element: "div",
              className: "flex gap-32",
              children: [
                El({
                  element: "div",
                  className: "",
                  children: [
                    El({
                      element: "p",
                      className: "font-[700] text-[18px]",
                      children: ["Size"],
                    }),
                    El({
                      element: "div",
                      className: "flex gap-2",
                      children: [
                        ...data.size.map((item) => {
                          // console.log(item);   //42,41,40

                          return El({
                            element: "button",
                            className: `border border-black w-8 h-8 rounded-full`,
                            children:[`${item}`],
                            onclick: (e) => {
                              let index = e.target;
                              console.log("index",index);
                              let buttons = [...e.target.parentNode.children];
                              console.log(buttons);
                              buttons.map((button) => {
                                // console.log(button);
                                if (button === index) {
                                  // console.log(index);
                                  index.classList.add("bg-black");
                                  index.classList.add("text-white");
                                  // index.classList.add("selected-size");
                                  // console.log(index);
                                } else if (button !== index) {
                                  // console.log(button);
                                  button.classList.remove("bg-black");
                                  button.classList.remove("text-white");
                                  // button.classList.remove("selected-size");
                                }
                              });
                            },

                           
                          });
                          
                        }),

                      ],
                    }),
                  ],
                }),

                // color
              
                El({
                  element: "div",
                  className: "",
                  children: [
                    El({
                      element: "p",
                      className: "font-[700] text-[18px]",
                      children: ["Color"],
                    }),
                    El({
                      element: "div",
                      className: "flex gap-2",
                      children: [
                        ...data.color.map((item) => {
                          // console.log(item);
                          return El({
                            element: "button",
                            className: `w-8 h-8 rounded-full bg-${item}-700`,
                            onclick: (e) => {
                              // selectedcolor = item;
                              // console.log(selectedcolor);
                              let index = e.target;
                              // console.log(index);
                              let buttons = [...e.target.parentNode.children];
                              // console.log(buttons);
                              buttons.map((button) => {
                                // console.log(button);
                                if (button === index) {
                                  // console.log(index);
                                  index.classList.add("border-[3px]");
                                  index.classList.add("border-black");
                                  index.classList.add(`${item}-color`);
                                  // console.log(index);
                                } else if (button !== index) {
                                  // console.log(button);
                                  button.classList.remove("border-[3px]");
                                  button.classList.remove("border-black");
                                  button.classList.remove(`${item}-color`);
                                }
                              });
                            },
                            // children: [`bg-${item}-700`],
                          });
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        // quntity
        El({
          element: "div",
          className: "flex w-[414px] gap-4 mt-6 items-center",
          children: [
            El({
              element: "p",
              className: "font-[700] text-[18px]",
              children: ["Quantity"],
            }),
            El({
              element: "div",
              className:
                "bg-gray-200 flex justify-center items-center p-1 w-28 rounded-full gap-4",
              children: [
                El({
                  element: "button",
                  className: "font-[700] text-[26px]",
                  children: [`−`],
                  onclick: () => {
                    reduceCounterShoe(data);
                  },
                }),
                El({
                  element: "p",
                  id: "counterShoe",
                  className: "font-[700] text-[18px]",
                  children: `1`,
                }),
                El({
                  element: "button",
                  className: "font-[700] text-[26px]",
                  children: [`+`],
                  onclick: () => {
                    increasCounterShoes(data);
                  },
                }),
              ],
            }),
          ],
        }),

        //totoalprice
        El({
          element: "div",
          className: "w-[414px] px-6 flex justify-between py-8",
          children: [
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "p",
                  className: "",
                  children: ["Total Price"],
                }),
                El({
                  element: "p",
                  id: "totalPriceShoe",
                  className: "font-[700] text-[28px]",
                  children: ["1600"],
                }),
              ],
            }),
            El({
              element: "button",
              className:
                "bg-black text-white h-16 w-60 flex justify-center items-center rounded-full",
              // onclick: () => {
              //   getDatauser(1).then((res) => {
              //     // console.log(res);
              //     // const _ = require("lodash");
              //     const clone = res.data;
              //     // console.log(data.id);
              //     const previousOrder = find(clone.cart, { id: data.id });

              //     let quantity = Number(
              //       document.getElementById("counterShoe").firstChild.data
              //     );

              //     let totalPr = Number(
              //       document
              //         .getElementById("totalPriceShoe")
              //         .firstChild.data.substr(2)
              //     );

              //     let sizeselect = Number(
              //       document.querySelector(".selected-size").firstChild.data
              //     );

              //     // let colorselected = document.querySelector(".selected-color");
              //     // console.log(...colorselected.classList);

              //     if (previousOrder) {
              //       // console.log(quantity);
              //       // const neworeder = previousOrder;
              //       // neworeder.quantity = previousOrder.quantity + quantity;
              //       clone.cart.forEach((item) => {
              //         if (item.id === previousOrder.id) {
              //           item.quantity = previousOrder.quantity + quantity;
              //           item.totalPr = previousOrder.totalPr + totalPr;
              //           data.sizeselect = sizeselect;
              //           data.colorselect = selectedcolor;
              //         }
              //       });

              //       // console.log(index);
              //       // data.quantity = newQuantity;
              //       // console.log(data.quantity);
              //       // postproductone(1, (previousOrder.quantity = newQuantity));
              //     } else {
              //       data.sizeselect = sizeselect;
              //       data.colorselect = selectedcolor;
              //       data.quantity = quantity;
              //       data.totalPr = totalPr;
              //       clone.cart.push(data);
              //     }

              //     postproductone(1, clone);
              //     Router().navigate("/home");
              //   });
              //   // postproductone(1, data);
              //   // console.log(
              //   //   Number(
              //   //     document
              //   //       .getElementById("totalPriceShoe")
              //   //       .firstChild.data.substr(2)
              //   //   )
              //   // );
              // },
              children: [`Add to Cart`],
            }),
          ],
        }),

        //   end
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
export default productDetail;
