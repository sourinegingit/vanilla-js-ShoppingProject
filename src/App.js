import { El } from "./el/El";

export const App = () => {
  return El({
    element: "div",
    id: "rootsElement",
    className: "flex flex-col  items-center mx-auto",
    children: ["hiiiiii"],
  });
};
