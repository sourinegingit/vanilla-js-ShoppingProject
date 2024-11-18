import { cartdata } from "../../api/cartData";
import { cartIncreasebtnshoe } from "../../components/card/cartIncreasebtnshoe";
import { cartReducebtnshoe } from "../../components/card/cartReducebtnshoe";
import { totalCart } from "../../components/card/totalCart";
import { El } from "../../el/El";
import { router } from "../../routes/router";

const cart = async () => {
  try {
    const data = await cartdata();   
    if (!data || !data.cart) {
      console.error('Cart data is missing.');
      return;
    }

      // console.log(data.cart);
    return El({
      element: "div",
      id: "cart",
      className: "w-screen h-screen flex flex-col overflow-y-hidden",
      children: [
        El({
          element: "nav",
          id: "",
          className:
            "fixed flex w-full h-[80px] z-20 top-0 justify-between items-center px-[24px] bg-white",
          children: [
            El({
              element: "div",
              className: "flex",
              children: [
                El({
                  element: "img",
                  className: "w-[30px] ",
                  src: "./src/images/logo/logo-black.png",
                }),
                El({
                  element: "p",
                  className: "font-[600] text-[30px] ml-4 font-mono",
                  children: ["My Cart"],
                }),
              ],
            }),
            El({
              element: "button",
              className: "",
              onclick: () => {
                router.navigate("/search");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/search.svg",
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          id: "products-cart",
          className:
            "absolute p-4 w-full top-[80px] flex flex-col  justify-center gap-4 overflow-y-scroll no-scrollbar pb-48",
          children: data.cart.map((item) => {
            return El({
              element: "div",
              id: `${item.id}`,
              className: "flex w-full shadow-2xl rounded-xl",
              children: [
                El({
                  element: "div",
                  className:
                    "w-[182px] h-[182px] p-4 flex justify-center items-center  rounded-2xl",
                  children: [
                    El({
                      element: "img",
                      className:
                        "w-full h-full rounded-2xl w-full h-full shadow-lg",
                      src: `${item.images}`,
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "flex flex-col p-2 justify-center gap-2",
                  children: [
                    El({
                      element: "div",
                      className: "flex justify-between",
                      children: [
                        El({
                          element: "p",
                          className: "font-[600] text-[24px]",
                          children: [`${item.title}`],
                        }),
                        El({
                          element: "button",
                          dataset: { id: `${item.id}` },
                          className: "",
                          eventListener: [
                            {
                              event: "click",
                              callback: (e) => {
                                // console.log(e.target.dataset.id);

                                // Get the user data
                                fetch("/users/1")
                                  .then((response) => response.json()) // Parse the response as JSON
                                  .then((data) => {
                                    const cloneDeep = { ...data }; // Clone the response data to avoid mutating the original object
                                    console.log(cloneDeep);

                                    // Filter out the product from the cart
                                    cloneDeep.cart = cloneDeep.cart.filter(
                                      (product) => product.id !== item.id
                                    );

                                    // Put the updated user data
                                    fetch("/users/1", {
                                      method: "PUT",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(cloneDeep), // Send the updated data as JSON
                                    })
                                      .then((response) => response.json()) // Parse the response after PUT request
                                      .then((updatedData) => {
                                        console.log(updatedData);
                                        location.reload(); // Reload the page after updating
                                      })
                                      .catch((err) =>
                                        console.error(
                                          "Error updating user data:",
                                          err
                                        )
                                      );
                                  })
                                  .catch((err) =>
                                    console.error(
                                      "Error fetching user data:",
                                      err
                                    )
                                  );
                              },
                            },
                          ],

                          children: [
                            El({
                              element: "img",
                              dataset: { id: `${item.id}` },
                              className: "w-6 h-6",
                              src: "http://localhost:5173/src/images/icon/bin.svg",
                            }),
                          ],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex items-center ",
                      children: [
                        El({
                          element: "div",
                          className: `w-4 h-4 rounded-full bg-${item.colorselect}-700 m-2`,
                          children: [],
                        }),
                        El({
                          element: "p",
                          className:
                            "px-2 border-r border-gray-500 text-gray-700",
                          children: [`${item.colorselect}`],
                        }),
                        El({
                          element: "p",
                          className: "p-2  text-gray-700",
                          children: [`Size = ${item.sizeselect}`],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex justify-between items-center",
                      children: [
                        El({
                          element: "p",
                          className: "font-[600] text-[18px]",
                          children: [`$ ${item.price}`],
                        }),
                        El({
                          element: "div",
                          className:
                            "bg-gray-200 flex justify-center items-center h-10 w-24 rounded-full gap-4",
                          children: [
                            El({
                              element: "button",
                              className: "font-[600] text-[26px]",
                              children: [`−`],
                              onclick: () => {
                                cartReducebtnshoe(item, item.id);
                              },
                            }),
                            El({
                              element: "p",
                              dataset: "",
                              id: `cartcounterShoe${item.id}`,
                              className: "font-[600] text-[18px]",
                              children: `${item.quantity}`,
                            }),
                            El({
                              element: "button",
                              className: "font-[600] text-[26px]",
                              children: [`+`],
                              onclick: () => {
                                cartIncreasebtnshoe(item, item.id);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        }),
        El({
          element: "nav",

          className:
            "fixed flex w-full h-[110px] bottom-[65px] items-center justify-between px-[24px] rounded-t-3xl bg-white",
          children: [
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "p",
                  className: "w-[90px] ",
                  children: ["Total Price"],
                }),
                El({
                  element: "p",
                  id: "totalPriceCartPage",
                  className: "font-[700] text-[24px]",
                  children: [
                    "$",
                    data.cart.reduce((acc, item) => item.totalPr + acc, 0),
                  ],
                }),
              ],
            }),
            El({
              element: "button",
              onclick: () => {
                router.navigate("/checkout");
              },
              className:
                "w-[260px] h-[55px] shadow-2xl bg-black text-white rounded-full ",
              children: ["Checkout →"],
            }),
          ],
        }),
        El({
          element: "nav",
          id: "",
          className:
            "fixed flex w-full h-[66px] bottom-0 justify-between px-[48px] bg-white",
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
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/cart-select.png",
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
              onclick: () => {
                router.navigate("/wallet");
              },
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
                  src: "./src/images/icon/profile.svg",
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
  } catch (error) {
    console.log(error);
  }
};
export default cart;
