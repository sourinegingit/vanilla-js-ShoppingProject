import { El } from "./el/El";
export const App = () => {
  return El({
    element: "div",
    id: "rootsEl",
    className: "flex flex-col",
    children: [],
  });
};
