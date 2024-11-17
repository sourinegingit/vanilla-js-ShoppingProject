import { checkoutdata } from "../../api/checkoutData";
import { El } from "../../el/El";
import { router } from "../../routes/router";
import addressCart from "../addressCart/addressCart";
import editButton from "../addressCart/editButton";
import countItems2 from "../cart/countItemtwo";
import shoeCart2 from "../cart/shoeaCart";




const checkout = async () => {
    try {
      const  data  = await checkoutdata();
   console.log(data);
   
      return El({
        element: "div",
        className: "items-center bg-gray-50",
        children: [
          El({
            element: "div",
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
                    children: "Checkout",
                  }),
                ],
              }),
              El({
                element: "ion-icon",
                name: "ellipsis-horizontal-circle",
                className: "text-2xl",
              }),
            ],
          }),
          El({
            element: "h2",
            children: "Shipping Address",
            className: "text-xl font-bold text-left p-6",
          }),
          addressCart("Home", "", editButton()),
          El({
            element: "hr",
            className: "text-gray-500 mx-4",
          }),
          El({
            element: "h2",
            children: "Order List",
            className: "text-xl font-bold text-left p-6",
          }),
          El({
            element: "div",
            children: data.cart.map((item) => {
              return shoeCart2(item, countItems2(item));
            }),
            className: "mb-4",
          }),
          El({
            element: "hr",
            className: "text-gray-500 mx-4",
          }),
          El({
            element: "h2",
            children: "Choose Shipping",
            className: "text-xl font-bold text-left p-6",
          }),
          El({
            element: "button",
            className: "w-full",
            onclick: () => {
              router.navigate("/shippingType");
            },
            children: [
              El({
                element: "div",
                className:
                  "flex items-center justify-between text-left p-4 rounded-2xl mx-4 bg-white",
                children: [
                  El({
                    element: "div",
                    className: "flex items-center gap-3",
                    children: [
                      El({
                        element: "ion-icon",
                        name: "car",
                        className: "text-3xl",
                      }),
                      El({
                        element: "p",
                        children: "Choose Shipping Type",
                        className: "font-bold",
                      }),
                    ],
                  }),
                  El({
                    element: "ion-icon",
                    name: "chevron-forward",
                    className: "text-2xl",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "h2",
            children: "Promo Code",
            className: "text-xl font-bold text-left p-6",
          }),
          El({
            element: "div",
            className: "flex justify-between items-center gap-2 mx-4 mb-8",
            children: [
              El({
                element: "input",
                placeholder: "Enter Promo Code",
                className:
                  "bg-gray-100 text-slate-500 font-light py-4 pl-4 rounded-2xl outline-none w-full",
              }),
              El({
                element: "button",
                className: "flex",
                children: [
                  El({
                    element: "ion-icon",
                    name: "add-circle",
                    className: "text-5xl",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "rounded-2xl mb-10 bg-white mx-4",
            children: [
              El({
                element: "div",
                className: "flex justify-between p-4",
                children: [
                  El({
                    element: "p",
                    children: "Amount",
                    className: "text-gray-600 text-lg",
                  }),
                  El({
                    element: "span",
                    children: [
                      "$",
                      data.cart.reduce((acc, item) => item.totalPr + acc, 0),
                    ],
                    className: "text-gray-700 text-lg",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex justify-between p-4",
                children: [
                  El({
                    element: "p",
                    children: "Shipping",
                    className: "text-gray-600 text-lg font-normal",
                  }),
                  El({
                    element: "span",
                    children: "-",
                    className: "text-gray-700 font-bold text-lg",
                  }),
                ],
              }),
              El({
                element: "hr",
                className: "text-gray-500 mx-4",
              }),
              El({
                element: "div",
                className: "flex justify-between p-4",
                children: [
                  El({
                    element: "p",
                    children: "Total",
                    className: "text-gray-600 text-lg font-normal",
                  }),
                  El({
                    element: "span",
                    children: [
                      "$",
                      data.cart.reduce((acc, item) => item.totalPr + acc, 0),
                    ],
                    className: "text-gray-700 font-bold text-lg",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "w-full flex justify-center items-center py-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl",
            children: [
              El({
                element: "button",
                className:
                  " bg-black text-white flex justify-center items-center gap-x-4 rounded-full w-11/12 py-4",
                onclick: () => {
                router.navigate("/paymentMethod");
                },
                children: [
                  El({
                    element: "span",
                    className: "self-center text-sm font-semibold",
                    children: "Continue to Payment",
                  }),
                  El({
                    element: "ion-icon",
                    name: "arrow-forward",
                    className: "text-lg font-bold",
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
  
  export default checkout;