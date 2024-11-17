import { El } from "../../el/El";
import { router } from "../../routes/router";

const editButton = () => {
    return El({
      element: "button",
      className: "flex",
      onclick: () => {
        router.navigate("/shippingAddress");
      },
      children: [
        El({
          element: "img",
          src: "./src/images/icon/edit.svg",
          className: "text-3xl w-6 h-6",
        }),
      ],
    });
  };
  
  export default editButton;
  